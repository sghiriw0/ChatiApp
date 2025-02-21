import { Gif, Microphone, PaperPlaneTilt } from "@phosphor-icons/react";
import React, { useState } from "react";
import EmojiPicker from "../../components/EmojiPicker";
import Attachment from "../../components/Attachment";
import Giphy from "../../components/Giphy";
import { useDispatch } from "react-redux";
import { ToggleAudioModal } from "../../redux/slices/app";

export default function Input() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [gifOpen, setGifOpen] = useState(false);

  const handleMicClick = (e) => {
    e.preventDefault();

    dispatch(ToggleAudioModal(true));
  };

  const handleToggleGif = (e) => {
    e.preventDefault();
    setGifOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEmojiSelect = (emoji) => {
    setInputValue((prev) => prev + emoji.native); // Append selected emoji to input value
  };

  const handleSendMsg = (e) => {};

  return (
    <div className="sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between space-x-4.5">
        <div className="relative w-full">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMsg(e);
            }}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Send Message..."
            className="h-13 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-primary
                dark:border-strokedark dark:bg-boxdark-2 dark:text-white"
          />

          <div className="absolute right-5 top-1/2 -translate-y-1/2 items-center justify-end space-x-4">
            <button onClick={handleMicClick} className="hover:text-primary">
              <Microphone size={20} />
            </button>
            <button className="hover:text-primary">
              <Attachment />
            </button>
            <button onClick={handleToggleGif}>
              <Gif size={20} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover:text-primary"
            >
              <EmojiPicker onSelectEmoji={handleEmojiSelect} />
            </button>
          </div>
        </div>

        <button
          onClick={handleSendMsg}
          disabled={!inputValue}
          className={`flex items-center justify-center h-13 max-w-13 w-full rounded-md  hover:bg-opacity-90 ${
            !inputValue
              ? "bg-gray text-body dark:bg-boxdark-2 dark:text-body"
              : "bg-primary text-white"
          }`}
        >
          <PaperPlaneTilt size={24} weight="bold" />
        </button>
      </div>

      {gifOpen && <Giphy />}
    </div>
  );
}
