import { X } from "@phosphor-icons/react";
import React, { useEffect, useRef } from "react";

export default function DeleteConfirmation({ open, handleClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!open || keyCode !== 27) return;

      handleClose();
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, []); // Added dependencies for the useEffect

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
        <div className="flex flex-row items-center justify-between mb-8 space-x-2 border-b border-stroke dark:border-strokedark pb-4">
          <div className="text-md font-medium text-black dark:text-white">
            Delete Confirmation
          </div>

          <button onClick={handleClose}>
            <X size={24} />
          </button>
        </div>

        <div className="space-y-2">
          <span className="font-semibold block text-lg mb-4">
            Are you sure you want to delete your profile from Chati?
          </span>
          <div className="p-4">
            <span className="block mb-4">Warning:</span>
            <span className="text-danger">
              All data related to you will be deleted from our servers in 30
              days, you can comeback & login before 30 days to get back your
              account
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-6 justify-between mt-4">
          <button
            onClick={handleClose}
            className="border-primary rounded-md text-primary py-3 w-full border"
          >
            Cancel
          </button>
          <button className="bg-primary rounded-md text-white py-3 w-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
