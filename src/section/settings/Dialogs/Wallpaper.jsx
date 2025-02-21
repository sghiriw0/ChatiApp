import { X } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";

const OPTIONS = [
  {
    key: 0,
    url: "https://i.pinimg.com/1200x/d2/a7/76/d2a77609f5d97b9081b117c8f699bd37.jpg",
  },
  {
    key: 1,
    url: "https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg",
  },
  {
    key: 2,
    url: "https://media.istockphoto.com/id/1170700470/vector/social-media-seamless-doodle-pattern.jpg?s=612x612&w=0&k=20&c=B-QzqY_R73IcruJXmmO7AWFpt1F06LCDNaB5fXbKqcI=",
  },
  {
    key: 3,
    url: "https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg",
  },
  {
    key: 4,
    url: "https://media.istockphoto.com/id/1219641933/vector/network-hand-drawn-print.jpg?s=612x612&w=0&k=20&c=2QkrKtMxj-6qIIqktkykB2vgE5KbKEUufd9iFuvC9GA=",
  },
  {
    key: 5,
    url: "https://wallpapercave.com/wp/wp14199734.jpg",
  },
  {
    key: 6,
    url: "https://st3.depositphotos.com/2800301/34488/v/450/depositphotos_344884486-stock-illustration-vector-pattern-with-toys-for.jpg",
  },
  {
    key: 7,
    url: "https://www.shutterstock.com/image-vector/vector-line-art-doodle-cartoon-600nw-358251263.jpg",
  },
];

export default function Wallpaper({ open, handleClose }) {
  const modalRef = useRef(null);

  // selected wallpaper key
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!open || keyCode !== 27) return;

      handleClose();
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, [open, handleClose]);

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        open ? "block" : "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="md:px-10 w-full max-w-screen-md rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      >
        <div className="flex flex-row items-center justify-between mb-8 space-x-2 border-b border-stroke dark:border-strokedark pb-4">
          <div className="text-md font-medium text-black dark:text-white">
            Set Wallpaper
          </div>

          <button onClick={handleClose}>
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {OPTIONS.map((option) => (
            <div
              key={option.key}
              onClick={() => setSelected(option.key)}
              className={`relative w-full h-32 cursor-pointer border shadow-2 rounded-lg ${
                selected === option.key
                  ? "border-primary border-4"
                  : "border-stroke dark:border-strokedark"
              }`}
            >
              <img
                src={option.url}
                alt={`Wallpaper ${option.key}`}
                className="w-full h-full object-cover rounded-md hover:opacity-75 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center space-x-6 justify-between mt-4">
          <button
            onClick={handleClose}
            className="border-primary rounded-md text-primary py-3 w-full border"
          >
            Cancel
          </button>
          <button className="bg-primary rounded-md text-white py-3 w-full">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
