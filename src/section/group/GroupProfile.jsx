import { CaretDown, CaretRight, CaretUp, File, Image, Link, X } from "@phosphor-icons/react";
import React, { useState } from "react";

export default function GroupProfile({ handleToggleUserInfo }) {
  const [showMembers, setShowMembers] = useState(false);

  const handleToggleMembers = () => {
    setShowMembers((p) => !p);
  };
  
  return (
    <div className="xl:border-l hidden xl:flex flex-col h-full border-stroke dark:border-strokedark">
      <div className="sticky border-b border-stroke dark:border-strokedark flex flex-row items-center justify-between w-full px-6 py-7.5">
        <div className="text-black dark:text-white font-semibold text-lg">
          Group Details
        </div>

        <button onClick={handleToggleUserInfo}>
          <X size={24} />
        </button>
      </div>

      <div className="mx-10 my-8 flex-grow overflow-auto no-scrollbar">
        {/* Group Name */}
        <div className="flex flex-col justify-start w-full space-y-2 mb-4">
          <div className="text-sm font-semibold dark:text-white">Name</div>
          <div className="dark:text-white">Web Development</div>
        </div>
        <div className="border-b border-stroke dark:border-strokedark mb-4"></div>

        {/* Description */}
        <div className="flex flex-col justify-start w-full space-y-2">
          <div className="text-sm font-semibold dark:text-white">Description</div>
          <div className="text-md dark:text-white">This is a web development group</div>
        </div>
        
        <div className="border-b border-stroke dark:border-strokedark my-4"></div>

        {/* Members */}
        <div className="flex flex-col justify-start w-full h-full overflow-auto space-y-2">
          <div
            onClick={handleToggleMembers}
            className="flex flex-row items-center justify-between"
          >
            <div className="text-sm font-semibold dark:text-white">Members (24)</div>

            <div>
              {!showMembers ? <CaretDown size={20} /> : <CaretUp size={20} />}
            </div>
          </div>

          {/* Scrollable list */}
          {showMembers && (
            <div className="no-scrollbar overflow-auto max-h-full space-y-2.5">
              {[...Array(20)].map((object, index) => (
                <div
                  className={`flex justify-between cursor-pointer items-center rounded px-4 py-2 dark:hover:bg-strokedark ${"hover:bg-gray-2 dark:hover:bg-boxdark-2/90"}`}
                  key={index}
                >
                  <div className="flex flex-row items-center">
                    <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full">
                      {object?.imgSrc ? (
                        <img
                          src={object.imgSrc}
                          alt="profile"
                          className="h-full w-full rounded-full object-cover object-center"
                        />
                      ) : (
                        <div
                          className="h-11 w-11 rounded-full border border-stroke dark:border-strokedark bg-gray dark:bg-boxdark flex items-center justify-center text-body dark:text-white capitalize"
                        >
                          {"ABC".charAt(0)}
                        </div>
                      )}

                      {object?.status === "Online" && (
                        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-success"></span>
                      )}
                    </div>

                    <div className="w-full">
                      <h5 className="text-sm font-medium text-black dark:text-white">
                        {object?.name || "Name"}
                      </h5>
                      {index === 0 && (
                        <p className="text-sm font-bold dark:text-white">Admin</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div>
            <div className="border-b border-stroke dark:border-strokedark my-4"></div>

            <button className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row items-center space-x-4">
                <Image size={21} />
                <span className="text-sm dark:text-white">View Media</span>
              </div>

              <CaretRight />
            </button>

            <div className="border-b border-stroke dark:border-strokedark my-4"></div>

            <button className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row items-center space-x-4">
                <File size={21} />
                <span className="text-sm dark:text-white">View Files</span>
              </div>

              <CaretRight />
            </button>

            <div className="border-b border-stroke dark:border-strokedark my-4"></div>

            <button className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row items-center space-x-4">
                <Link size={21} />
                <span className="text-sm dark:text-white">View Links</span>
              </div>

              <CaretRight />
            </button>

            <div className="border-b border-stroke dark:border-strokedark my-4"></div>

            <div className="flex flex-row items-center space-x-4">
              <button className="border border-primary rounded-lg w-full py-2 text-primary dark:text-white">
                Leave Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
