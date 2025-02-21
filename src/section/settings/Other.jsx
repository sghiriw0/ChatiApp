import React, { useState } from "react";
import Switch from "../../components/Switch";
import { Globe, Image, List, Palette, Trash } from "@phosphor-icons/react";
import { BlockList, Delete, Language, Theme, Wallpaper } from "./Dialogs";

export default function Other() {
  const [openDelete, setOpenDelete] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openWallpaper, setOpenWallpaper] = useState(false);
  const [openBlockList, setOpenBlockList] = useState(false);

  const handleToggleDelete = () => {
    setOpenDelete((p) => !p);
  };

  const handleToggleTheme = () => {
    setOpenTheme((p) => !p);
  };

  const handleToggleLanguage = () => {
    setOpenLanguage((p) => !p);
  };

  const handleToggleWallpaper = () => {
    setOpenWallpaper((p) => !p);
  };

  const handleToggleBlockList = () => {
    setOpenBlockList((p) => !p);
  };

  return (
    <>
      <div className="flex flex-col w-full p-4 space-y-6 max-w-150">
        <button
          onClick={handleToggleBlockList}
          className="flex flex-row items-center justify-between border p-4 border-stroke dark:border-strokedark rounded-md shadow-1 hover:border-primary hover:bg-primary/20 hover:text-primary"
        >
          <div>Manage Block List</div>
          <List size={24} />
        </button>
        <button
          onClick={handleToggleWallpaper}
          className="flex flex-row items-center justify-between border p-4 border-stroke dark:border-strokedark rounded-md shadow-1 hover:border-primary hover:bg-primary/20 hover:text-primary"
        >
          <div>Customise chat Wallpaper</div>
          <Image size={24} />
        </button>
        <button
          onClick={handleToggleLanguage}
          className="flex flex-row items-center justify-between border p-4 border-stroke dark:border-strokedark rounded-md shadow-1 hover:border-primary hover:bg-primary/20 hover:text-primary"
        >
          <div>Preferred Language</div>
          <Globe size={24} />
        </button>
        <button
          onClick={handleToggleTheme}
          className="flex flex-row items-center justify-between border p-4 border-stroke dark:border-strokedark rounded-md shadow-1 hover:border-primary hover:bg-primary/20 hover:text-primary"
        >
          <div>Theme Color</div>
          <Palette size={24} />
        </button>
        <button
          onClick={handleToggleDelete}
          className="flex flex-row items-center justify-between border p-4 border-stroke dark:border-strokedark rounded-md shadow-1 hover:border-primary hover:bg-primary/20 hover:text-primary"
        >
          <div>Delete My Profile</div>
          <Trash size={24} />
        </button>
      </div>

      {openDelete && (
        <Delete open={openDelete} handleClose={handleToggleDelete} />
      )}
      {openTheme && <Theme open={openTheme} handleClose={handleToggleTheme} />}
      {openLanguage && (
        <Language open={openLanguage} handleClose={handleToggleLanguage} />
      )}

      {openWallpaper && (
        <Wallpaper open={openWallpaper} handleClose={handleToggleWallpaper} />
      )}

      {openBlockList && (
        <BlockList open={openBlockList} handleClose={handleToggleBlockList} />
      )}
    </>
  );
}
