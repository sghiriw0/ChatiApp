import { Hash } from "@phosphor-icons/react";
import React from "react";

export default function Header({ handleToggleGroupInfo }) {
  return (
    <div className="sticky border-b space-y-2 border-stroke dark:border-strokedark px-6 py-5">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center" onClick={handleToggleGroupInfo}>
          <Hash size={20} className="mr-3" />
          <div className="flex flex-col space-y-1">
            <div className="font-medium text-black dark:text-white text-nowrap">
              Study Group
            </div>
            <div className="text-sm">24 Members</div>
          </div>
        </div>
      </div>
    </div>
  );
}
