import React from "react";

const Switch = ({ checked, onChange }) => {
  return (
    <label
      className={`relative m-0 block h-7.5 w-14 rounded-full ${
        checked ? "bg-primary" : "bg-stroke"
      }`}
    >
      <input
        type="checkbox"
        className="absolute z-50 top-0 m-0 h-full w-full cursor-pointer opacity-0"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white duration-75 ease-linear ${
          checked && "!right-[3px] !translate-x-full"
        }`}
      />
    </label>
  );
};

export default Switch;
