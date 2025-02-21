import { Hash, Lock, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import React, { useState } from "react";
import CreateGroup from "./CreateGroup";

const FILTERS = [
  {
    key: 0,
    title: "All",
  },
  {
    key: 1,
    title: "Public",
  },
  {
    key: 2,
    title: "Private",
  },
];

const LIST = [
  {
    key: 0,
    title: "Friends",
    isPublic: true,
  },
  {
    key: 1,
    title: "School",
    isPublic: false,
  },
  {
    key: 2,
    title: "Homework",
    isPublic: false,
  },
  {
    key: 3,
    title: "Assignments",
    isPublic: true,
  },
];

export default function GroupList() {
  const [openAddGroup, setOpenAddGroup] = useState(false);

  const [selectedGroup, setSelectedGroup] = useState(0);

  const [hovered, setHovered] = useState("");

  const handleToggleAddGroup = () => {
    setOpenAddGroup((p) => !p);
  };

  const handleSelectGroup = (id) => {
    setSelectedGroup(id);
  };

  const [filter, setFilter] = useState(0);
  return (
    <>
    <div className="hidden h-full flex-col xl:flex xl:w-1/4">
      <div className="sticky border-b border-stroke dark:border-strokedark px-6 py-7.5 flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <h3 className="text-lg font-medium text-black dark:text-white 2xl:text-xl">
            Groups
          </h3>
          <span className="rounded-md border-[.5px] border-stroke dark:border-strokedark bg-gray px-2 py-0.5 text-base font-medium text-black dark:bg-boxdark-2 dark:text-white 2xl:ml-4">
            24
          </span>
        </div>

        <button onClick={handleToggleAddGroup}>
          <Plus size={20} />
        </button>
      </div>
      <div className="flex max-h-full flex-col overflow-auto p-5">
        <form className="sticky mb-4">
          <input
            placeholder="Search..."
            type="text"
            //   value={searchTerm} // Controlled input
            //   onChange={handleSearchChange} // Handle input change
            className="w-full rounded border border-stroke bg-gray-2 py-2.5 pl-5 pr-10 text-sm outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2"
          />

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <MagnifyingGlass size={20} />
          </button>
        </form>
        <div className="flex flex-row items-center space-x-2 mb-6">
          {FILTERS.map((el) => (
            <div
              key={el.key}
              onClick={() => {
                setFilter(el.key);
              }}
              className={`rounded-full p-1 px-3 text-sm hover:cursor-pointer hover:bg-opacity-90 ${
                el.key === filter
                  ? "bg-primary bg-opacity-80 text-white"
                  : "text-body border border-stroke dark:border-strokedark"
              }`}
            >
              {el.title}
            </div>
          ))}
        </div>

        <div className="no-scrollbar overflow-auto max-h-full space-y-2.5">
          {LIST.map(({ key, isPublic, title }) => (
            <div
              key={key}
              className={`flex justify-between cursor-pointer items-center rounded px-4 py-2 dark:hover:bg-strokedark ${
                selectedGroup === key
                  ? "bg-gray dark:bg-boxdark-2"
                  : "hover:bg-gray-2 dark:hover:bg-boxdark-2/90"
              }`}
              onClick={() => {
                handleSelectGroup(key);
              }}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-3">
                  <Hash size={20} />
                  <h5 className="text-sm font-medium text-black dark:text-white">
                    {title}
                  </h5>
                </div>
                {isPublic ? <></> : <Lock />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    
    {openAddGroup && <CreateGroup open={openAddGroup} handleClose={handleToggleAddGroup} /> }
    </>
  );
}
