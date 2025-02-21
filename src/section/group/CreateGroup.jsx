import { X } from "@phosphor-icons/react";
import React, { useRef } from "react";
import SelectGroupType from "./FormElements/SelectGroupType";
import SelectMembers from "./FormElements/SelectMembers";

export default function CreateGroup({ open, handleClose }) {
  const modalRef = useRef(null);
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
        <div className="flex flex-row items-center justify-between mb-8 space-x-2 border-b pb-4 border-stroke dark:border-strokedark">
          <div className="text-md font-medium text-black dark:text-white">
            Create Group
          </div>

          <button
            onClick={() => {
              handleClose();
            }}
          >
            <X size={24} />
          </button>
        </div>

        <form>
          <div className="flex flex-col gap-5.5 mb-4">
            {/* Name */}
            <div>
               <label className="mb-3 text-sm block text-black dark:text-white">
                Group Name
              </label>
              <input
                type="text"
                placeholder="Enter group name"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {/* {errors.name && <p className="text-red">{errors.name.message}</p>} */}
            </div>
            {/* Description */}
            <div>
              <label className="mb-3 text-sm block text-black dark:text-white">
                Description
              </label>
              <textarea
                placeholder="Enter group description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {/* {errors.name && <p className="text-red">{errors.name.message}</p>} */}
            </div>
            <SelectGroupType />
            <SelectMembers id='multiSelect' />
          </div>
          <button
              type="submit"
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-3 px-6 text-white transition hover:bg-opacity-90"
            >
              Submit
            </button>
        </form>
      </div>
    </div>
  );
}
