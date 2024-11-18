"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CookieAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);

  // Check localStorage for a previous consent when the component mounts
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookieAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true); // Show alert if not accepted before
    }
  }, []);

  // Handle the accept button click (accept all cookies)
  const handleAcceptAll = () => {
    setIsVisible(false);
    localStorage.setItem("cookieAccepted", "true");
  };

  // Handle the reject button click
  const handleReject = () => {
    setIsVisible(false);
    localStorage.setItem("cookieAccepted", "false");
  };

  // Handle the customize button click (open cookie preferences modal)
  const handleCustomize = () => {
    setIsCustomizing(true);
  };

  // Handle saving cookie preferences (for this example, we'll just set them to true for now)
  const handleSavePreferences = () => {
    setIsVisible(false);
    setIsCustomizing(false);
    localStorage.setItem("cookieAccepted", "true");
  };

  return (
    <>
      {isVisible && !isCustomizing && (
        <motion.div
          className="fixed z-40 bottom-0 sm:bottom-4 w-full sm:w-fit sm:left-10 bg-brandNeutrals-1000/90 text-white p-4 rounded-lg shadow-lg flex flex-col gap-y-4 sm:flex-row items-center justify-between"
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -120 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <span className="text-sm">
            Używamy pliki cookie dla lepszej nawigacji.
          </span>
          <div className="flex ml-4 space-x-4">
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-primaryBlue-500 text-white rounded-md text-sm"
            >
              Akceptuję
            </button>
            <button
              onClick={handleCustomize}
              className="px-4 py-2 bg-brandNeutrals-1100 text-white rounded-md text-sm"
            >
              Dostosuj
            </button>
          </div>
        </motion.div>
      )}

      {isCustomizing && (
        <motion.div
          className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-bold mb-4">
              Dostosuj preferencje dotyczące zgody
            </h3>
            <p className="text-sm mb-4">
              Używamy plików cookie, aby pomóc użytkownikom w sprawnej nawigacji
              i wykonywaniu określonych funkcji. Szczegółowe informacje na temat
              wszystkich plików cookie odpowiadających poszczególnym kategoriom
              zgody znajdują się poniżej.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-4">
              <div>
                <label className="text-sm">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Niezbędne - Zawsze aktywne
                </label>
                <p className="text-xs text-gray-500">
                  Niezbędne pliki cookie mają kluczowe znaczenie dla
                  podstawowych funkcji witryny i witryna nie będzie działać w
                  zamierzony sposób bez nich.
                </p>
              </div>
              <div>
                <label className="text-sm">
                  <input type="checkbox" className="mr-2" />
                  Funkcjonalne
                </label>
              </div>
              <div>
                <label className="text-sm">
                  <input type="checkbox" className="mr-2" />
                  Analityka
                </label>
              </div>
              <div>
                <label className="text-sm">
                  <input type="checkbox" className="mr-2" />
                  Wydajność
                </label>
              </div>
              <div>
                <label className="text-sm">
                  <input type="checkbox" className="mr-2" />
                  Reklama
                </label>
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-primaryBlue-500 text-white rounded-md"
              >
                Zapisz preferencje
              </button>
              <button
                onClick={() => setIsCustomizing(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-md"
              >
                Anuluj
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CookieAlert;
