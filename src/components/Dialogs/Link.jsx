import { X } from "@phosphor-icons/react";
import React, { useRef } from "react";
import Microlink from "@microlink/react";

export default function Links({ open, handleClose, linkList }) {
  const modalRef = useRef();

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        open ? "block" : "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="md:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      >
        <div className="flex flex-row items-center justify-between mb-8 space-x-2 pb-4 border-b border-stroke dark:border-strokedark">
          <div className="text-md font-medium text-black dark:text-white">
            Links
          </div>

          <button onClick={handleClose}>
            <X size={24} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {linkList?.map((link, index) => (
            <Microlink
              key={index}
              url={link}
              style={{ width: "100%" }}
              className="rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
