import {
  CaretDown,
  Flag,
  PushPin,
  SpeakerSimpleX,
  Trash,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const ChatPopover = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="relative flex">
        <button
          className="text-[#98A6AD] hover:text-body"
          ref={trigger}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {/* Caret Down Icon */}
          <CaretDown />
        </button>
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className={`absolute right-0 top-full z-40 w-50 space-y-1 rounded-lg border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${
            dropdownOpen === true ? "block" : "hidden"
          }`}
        >
          <button
            className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
          >
            {/* Pin Icon */}
            <PushPin size={20} />
            Pin
          </button>
          <button
            className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
          >
            {/* Mute Icon */}
            <SpeakerSimpleX size={20} />
            Mute
          </button>
          <button
            className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
          >
            {/* Delete Icon */}
            <Trash size={20} />
            Delete
          </button>
          <button
            className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
          >
            {/* Block Icon */}
            <Flag size={20} />
            Block
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatPopover;