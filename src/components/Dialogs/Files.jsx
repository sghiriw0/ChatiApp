import { DownloadSimple, File, X } from "@phosphor-icons/react";
import React, { useRef } from "react";

export default function Files({ open, handleClose, fileList }) {
  const modalRef = useRef();

  const handleDownloadClick = ({ name, url }) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = name || "documentFile";
    link.click();
  };

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
        <div className="flex flex-row items-center justify-between mb-8 space-x-2 pb-4 border-b border-stroke dark:border-strokedark">
          <div className="text-md font-medium text-black dark:text-white">
            Files
          </div>

          <button onClick={handleClose}>
            <X size={24} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {/* eslint-disable-next-line react/prop-types */}
          {fileList?.map((file, index) => (
            <div
              key={index}
              className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 text-white space-y-2"
            >
              <div className="flex flex-row items-center justify-between p-2 bg-white rounded-md text-primary">
                <div className="flex flex-row items-center space-x-3">
                  <div className="p-2 rounded-md bg-primary/20 text-primary">
                    <File size={20} />
                  </div>
                  <div className="flex flex-col">
                    <div>{truncateString(file?.name)}</div>
                    <div className="text-sm font-medium">{file?.size}MB</div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleDownloadClick({ name: file?.name, url: file?.url });
                  }}
                  className="pl-5"
                >
                  <DownloadSimple />
                </button>
              </div>

              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
