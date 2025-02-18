import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BrickBreaker = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [activePowerUps, setActivePowerUps] = useState([]);
  const [level, setLevel] = useState(1);
  const [showLevelScreen, setShowLevelScreen] = useState(false);

  const config = {
    paddle: { height: 10, width: 75 },
    ball: { radius: 5, baseSpeed: 3 },
    brick: { rows: 5, cols: 9, width: 40, height: 20, padding: 5 },
    powerUpChance: 0.2,
    powerUpDuration: 10000,
    getDifficulty: (level) => ({
      ballSpeed: Math.min(3 + (level - 1) * 0.3, 7),
      powerUpChance: Math.max(0.2 - (level - 1) * 0.02, 0.05),
      extraBricks: Math.min(Math.floor((level - 1) / 3), 3)
    })
  };

  const powerUps = {
    multiball: { color: '#FF69B4', symbol: '×3' },
    flame: { color: '#FF4500', symbol: '🔥' },
    extend: { color: '#32CD32', symbol: '↔️' },
    slow: { color: '#4169E1', symbol: '⏱️' }
  };

  const gameState = useRef({
    balls: [],
    paddleX: 0,
    paddleWidth: config.paddle.width,
    bricks: [],
    powerUps: [],
    rightPressed: false,
    leftPressed: false,
    flameBall: false,
    slowMotion: false
  });

  const createBall = (x, y, speed = config.getDifficulty(level).ballSpeed, dx = speed, dy = -speed) => ({
    x, y, dx, dy, radius: config.ball.radius
  });

  const playSound = (type) => {
    if (isMuted) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = type === 'powerUp' ? 600 : type === 'brick' ? 400 : 300;
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.stop(ctx.currentTime + 0.1);
  };

  const initializeBricks = () => {
    const { powerUpChance, extraBricks } = config.getDifficulty(level);
    const bricks = [];
    for (let c = 0; c < config.brick.cols; c++) {
      bricks[c] = [];
      for (let r = 0; r < config.brick.rows + extraBricks; r++) {
        const hasPowerUp = Math.random() < config.powerUpChance;
        const powerUpType = hasPowerUp ? 
          Object.keys(powerUps)[Math.floor(Math.random() * Object.keys(powerUps).length)] : null;
        bricks[c][r] = { x: 0, y: 0, status: 1, powerUp: powerUpType };
      }
    }
    return bricks;
  };

  const activatePowerUp = (type) => {
    playSound('powerUp');
    setActivePowerUps(prev => [...prev, type]);
    const mainBall = gameState.current.balls[0];

    switch (type) {
      case 'multiball':
        gameState.current.balls.push(
          createBall(mainBall.x, mainBall.y, mainBall.dx * 0.866, mainBall.dy * 0.5),
          createBall(mainBall.x, mainBall.y, mainBall.dx * -0.866, mainBall.dy * 0.5)
        );
        break;
      case 'flame':
        gameState.current.flameBall = true;
        break;
      case 'extend':
        gameState.current.paddleWidth = config.paddle.width * 1.5;
        break;
      case 'slow':
        gameState.current.balls.forEach(ball => {
          ball.dx *= 0.5;
          ball.dy *= 0.5;
        });
        break;
    }

    setTimeout(() => {
      setActivePowerUps(prev => prev.filter(p => p !== type));
      switch (type) {
        case 'flame':
          gameState.current.flameBall = false;
          break;
        case 'extend':
          gameState.current.paddleWidth = config.paddle.width;
          break;
        case 'slow':
          gameState.current.balls.forEach(ball => {
            ball.dx *= 2;
            ball.dy *= 2;
          });
          break;
      }
    }, config.powerUpDuration);
  };

    const startGame = () => {
    // Reset game state
    setGameOver(false);
    setGameStarted(true);
    if (!showLevelScreen) {
      setScore(0);
      setLevel(1);
    }
    
    // Initialize paddle position
    const canvas = canvasRef.current;
    gameState.current = {
      ...gameState.current,
      paddleX: (canvas.width - config.paddle.width) / 2,
      paddleWidth: config.paddle.width,
      balls: [createBall(canvas.width / 2, canvas.height - 30)],
      bricks: initializeBricks(),
      powerUps: [],
      rightPressed: false,
      leftPressed: false,
      flameBall: false,
      slowMotion: false
    };
  };
  
  const draw = () => {
    if (!canvasRef.current || !gameStarted) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bricks
    gameState.current.bricks.forEach((col, c) => {
      col.forEach((brick, r) => {
        if (brick.status) {
          brick.x = c * (config.brick.width + config.brick.padding) + 30;
          brick.y = r * (config.brick.height + config.brick.padding) + 30;
          ctx.beginPath();
          ctx.rect(brick.x, brick.y, config.brick.width, config.brick.height);
          ctx.fillStyle = brick.powerUp ? powerUps[brick.powerUp].color : `hsl(${c * 30 + r * 20}, 70%, 60%)`;
          ctx.fill();
          ctx.closePath();
        }
      });
    });

    // Update and draw balls
    gameState.current.balls = gameState.current.balls.filter(ball => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = gameState.current.flameBall ? '#FF4500' : '#3B82F6';
      ctx.fill();
      ctx.closePath();

      // Ball physics
      if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
        playSound('wall');
      }
      if (ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
        playSound('wall');
      }

      // Paddle collision
      if (ball.y + ball.dy > canvas.height - ball.radius) {
        if (ball.x > gameState.current.paddleX && 
            ball.x < gameState.current.paddleX + gameState.current.paddleWidth) {
          const hitPoint = (ball.x - gameState.current.paddleX) / gameState.current.paddleWidth;
          ball.dx = 6 * (hitPoint - 0.5);
          ball.dy = -ball.dy;
          playSound('paddle');
        } else return false;
      }

      // Brick collision
      gameState.current.bricks.forEach((col, c) => {
        col.forEach((brick, r) => {
          if (brick.status && 
              ball.x > brick.x && 
              ball.x < brick.x + config.brick.width &&
              ball.y > brick.y && 
              ball.y < brick.y + config.brick.height) {
            if (!gameState.current.flameBall) ball.dy = -ball.dy;
            brick.status = 0;
            if (brick.powerUp) {
              gameState.current.powerUps.push({
                type: brick.powerUp,
                x: brick.x + config.brick.width / 2,
                y: brick.y + config.brick.height / 2
              });
            }
            setScore(s => s + 1);
            playSound('brick');
            
            // Check if all bricks are destroyed
            const remainingBricks = gameState.current.bricks.flat().some(b => b.status === 1);
            if (!remainingBricks) {
              setGameStarted(false);
              setShowLevelScreen(true);
              setLevel(l => l + 1);
              playSound('powerUp');
            }
          }
        });
      });

      ball.x += ball.dx;
      ball.y += ball.dy;
      return true;
    });

    // Draw paddle with power-up colors
    ctx.beginPath();
    ctx.rect(gameState.current.paddleX, canvas.height - config.paddle.height, 
            gameState.current.paddleWidth, config.paddle.height);
            
    if (activePowerUps.length > 0) {
      // Create gradient if multiple power-ups are active
      if (activePowerUps.length > 1) {
        const gradient = ctx.createLinearGradient(
          gameState.current.paddleX, 0,
          gameState.current.paddleX + gameState.current.paddleWidth, 0
        );
        activePowerUps.forEach((powerUp, index) => {
          gradient.addColorStop(index / (activePowerUps.length - 1), powerUps[powerUp].color);
        });
        ctx.fillStyle = gradient;
      } else {
        // Single power-up color
        ctx.fillStyle = powerUps[activePowerUps[0]].color;
      }
    } else {
      // Default paddle color
      ctx.fillStyle = '#2563EB';
    }
    
    ctx.fill();
    ctx.closePath();

    // Draw power-ups
    gameState.current.powerUps = gameState.current.powerUps.filter(powerUp => {
      powerUp.y += 2;
      ctx.beginPath();
      ctx.arc(powerUp.x, powerUp.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = powerUps[powerUp.type].color;
      ctx.fill();
      ctx.fillStyle = '#FFF';
      ctx.textAlign = 'center';
      ctx.fillText(powerUps[powerUp.type].symbol, powerUp.x, powerUp.y + 3);
      ctx.closePath();

      if (powerUp.y > canvas.height - config.paddle.height &&
          powerUp.x > gameState.current.paddleX &&
          powerUp.x < gameState.current.paddleX + gameState.current.paddleWidth) {
        activatePowerUp(powerUp.type);
        return false;
      }
      return powerUp.y < canvas.height;
    });

    // Draw active power-ups
    activePowerUps.forEach((powerUp, i) => {
      ctx.beginPath();
      ctx.arc(30 + i * 40, 20, 8, 0, Math.PI * 2);
      ctx.fillStyle = powerUps[powerUp].color;
      ctx.fill();
      ctx.fillStyle = '#FFF';
      ctx.fillText(powerUps[powerUp].symbol, 30 + i * 40, 23);
      ctx.closePath();
    });

    // Move paddle
    const paddleStep = 7;
    if (gameState.current.rightPressed) {
      gameState.current.paddleX = Math.min(gameState.current.paddleX + paddleStep, canvas.width - gameState.current.paddleWidth);
    }
    if (gameState.current.leftPressed) {
      gameState.current.paddleX = Math.max(gameState.current.paddleX - paddleStep, 0);
    }

    // Check game over
    if (gameState.current.balls.length === 0) {
      setGameOver(true);
      setGameStarted(false);
    }
  };

  useEffect(() => {
    let frameId;
    if (gameStarted) {
      frameId = requestAnimationFrame(function loop() {
        draw();
        frameId = requestAnimationFrame(loop);
      });
    }
    return () => cancelAnimationFrame(frameId);
  }, [gameStarted]);

  useEffect(() => {
    const handleKey = (e, value) => {
      if (e.key === 'ArrowRight') gameState.current.rightPressed = value;
      if (e.key === 'ArrowLeft') gameState.current.leftPressed = value;
    };
    
    const handleMouse = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const newX = relativeX - gameState.current.paddleWidth / 2;
      
      // Constrain paddle position to canvas boundaries
      if (canvasRef.current) {
        gameState.current.paddleX = Math.max(0, Math.min(newX, canvasRef.current.width - gameState.current.paddleWidth));
      }
    };

    window.addEventListener('keydown', e => handleKey(e, true));
    window.addEventListener('keyup', e => handleKey(e, false));
    window.addEventListener('mousemove', handleMouse);
    
    // Return cleanup function
    return () => {
      window.removeEventListener('keydown', e => handleKey(e, true));
      window.removeEventListener('keyup', e => handleKey(e, false));
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []); // Empty dependency array since we're using refs

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Brick Breaker</h1>
            <span className="text-lg text-gray-600">Level: {level}</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMuted(!isMuted)} 
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            <span className="text-lg font-semibold">Score: {score}</span>
          </div>
        </div>
        <div className="relative">
          <canvas 
            ref={canvasRef} 
            width={480} 
            height={320} 
            className="w-full h-auto bg-gray-50 rounded-lg" 
          />
          {(!gameStarted || showLevelScreen) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <div className="text-center text-white p-4">
                <h2 className="text-2xl font-bold mb-2">
                  {gameOver ? 'Game Over!' : showLevelScreen ? `Level ${level} Complete!` : 'Ready to Play?'}
                </h2>
                <p className="mb-4">
                  {gameOver ? `Final Score: ${score}` : 
                   showLevelScreen ? `Score: ${score} - Get ready for increased difficulty!` :
                   'Use arrow keys or mouse to control the paddle'}
                </p>
                {showLevelScreen && (
                  <div className="mb-4 text-sm">
                    <p>• Faster ball speed</p>
                    <p>• More rows of bricks</p>
                    <p>• Fewer power-ups</p>
                  </div>
                )}
                <button 
                  onClick={() => {
                    if (showLevelScreen) {
                      setShowLevelScreen(false);
                    }
                    startGame();
                  }} 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
                >
                  {gameOver ? 'Play Again' : showLevelScreen ? 'Start Next Level' : 'Start Game'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrickBreaker;
