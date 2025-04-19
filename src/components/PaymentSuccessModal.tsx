import { useState } from "react";

export default function PaymentSuccessModal({ open: initialOpen = true }: { open?: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Payment Completed!</h2>
        <p className="mb-4 text-center text-lg">
          You can now go back to Google Sheets, refresh the page, and keep using AI4Sheets without any limitations.
        </p>
        <div className="aspect-w-16 aspect-h-9 mb-2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/p93Aw8P3fCg?si=Dwv5rOlSM5Py0Vt0"
            title="How it works"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="text-center text-sm text-secondary/60">Need help? Contact support from the footer below.</p>
      </div>
    </div>
  );
}
