import { CalendarBlank } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import DateRangePicker from "../DateRangePicker";

const DateRangePopover = () => {
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
          <CalendarBlank size={24} />
        </button>
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className={`absolute left-0 p-4 -bottom-[440px] z-40 w-100 space-y-1 rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
            dropdownOpen === true ? "block" : "hidden"
          }`}
        >
          <DateRangePicker />
        </div>
      </div>
    </>
  );
};

export default DateRangePopover;
