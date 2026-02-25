"use client";

export default function FloatingButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WA_NUMBER;

  const defaultMessage = encodeURIComponent("Assalamu'alaikum Admin Mahad Ibnu Aqil.\nSaya ingin bertanya mengenai informasi pendaftaran.");

  return (
    <div>
      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16 .4C7.2.4 0 7.6 0 16.4c0 2.9.8 5.7 2.2 8.1L0 32l7.7-2c2.3 1.2 4.8 1.9 7.3 1.9 8.8 0 16-7.2 16-16S24.8.4 16 .4zm0 29.2c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.2-1.9-1.8-4.1-1.8-6.4 0-6.9 5.6-12.5 12.5-12.5S28.5 9.5 28.5 16.4 22.9 29.6 16 29.6zm6.9-9.3c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.2.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.8-1.8-1-1-1.8-2.3-2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.7.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 3 0 1.7 1.3 3.4 1.5 3.7.2.2 2.6 4 6.3 5.5.9.4 1.6.6 2.2.7.9.3 1.7.2 2.4.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
        </svg>
      </a>
    </div>
  );
}
