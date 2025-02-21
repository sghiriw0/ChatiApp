import { X, Check } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";

const COLORS = [
  { key: 0, code: "#3C50E0" },
  { key: 1, code: "#DB2535" },
  { key: 2, code: "#077B49" },
  { key: 4, code: "#A02608" },
  { key: 5, code: "#FF5733" },
  { key: 6, code: "#9C27B0" },
  { key: 7, code: "#00BCD4" },
  { key: 8, code: "#4CAF50" },
  { key: 9, code: "#FF9800" },
  { key: 11, code: "#795548" },
  { key: 12, code: "#607D8B" },
  { key: 14, code: "#AD1457" },
];

export default function ThemeColor({ open, handleClose }) {
  const modalRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState(""); // Initial state

  useEffect(() => {
    // Get the current --color-primary value from the document root
    const currentPrimaryColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--color-primary").trim();

    // Check if the current primary color exists in the color list, otherwise default to the first color
    const initialColor =
      COLORS.find((color) => color.code === currentPrimaryColor) || COLORS[0];

    setSelectedColor(initialColor.code); // Set the initial selected color
  }, []); // Only run this effect once on mount


  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!open || keyCode !== 27) return;
      handleClose();
    };

    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [open, handleClose]);

  const handleChangePrimaryColor = (color) => {
    document.documentElement.style.setProperty("--color-primary", color);
    setSelectedColor(color); // Update the selected color state
    handleClose();
  };

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        open ? "block" : "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="md:px-17.5 w-full max-w-115 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      >
        <div className="flex flex-row items-center justify-between mb-8 space-x-2 border-b border-stroke dark:border-strokedark pb-4">
          <div className="text-md font-medium text-black dark:text-white">
            Theme Color
          </div>

          <button onClick={handleClose}>
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {COLORS.map(({ code, key }) => (
            <div
              key={key}
              className="relative"
              onClick={() => handleChangePrimaryColor(code)}
            >
              <div
                className="h-10 rounded-lg p-1 border w-full flex items-center justify-center"
                style={{
                  background: code,
                  borderColor: code,
                  color: "#fff",
                }}
              >
                {/* Show checkmark if color is selected */}
                {selectedColor === code && (
                  <Check size={20} weight="bold" className="text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
