import React, { useState } from "react";
import Switch from "../../components/Switch";

export default function Privacy() {
  const [settings, setSettings] = useState({
    profilePic: true,
    readReceipts: true,
    onlineStatus: true,
    typingStatus: true,
    findMe: true,
    addMeInGroups: true,
  });

  const handleSwitch = (option) => (e) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [option]: e.target.checked,
    }));
  };

  const options = [
    {
      label: "Show Profile Pic",
      caption: "You can choose to show/hide your profile pic.",
      key: "profilePic",
    },
    {
      label: "Read Receipts",
      caption:
        "If disabled others won't be able to see if you've read the message or not",
      key: "readReceipts",
    },
    {
      label: "Online Status",
      caption: "You can show/hide your online status",
      key: "onlineStatus",
    },
    {
      label: "Typing Status",
      caption: "You can show/hide your typing status",
      key: "typingStatus",
    },
    {
      label: "Allow others to find me",
      caption: "If enabled anyone will be able to find and message you",
      key: "findMe",
    },
    {
      label: "Allow others to add me in groups",
      caption: "If enabled anyone will be able to add you to their group",
      key: "addMeInGroups",
    },
  ];

  return (
    <div className="flex flex-col w-full p-4 space-y-6 max-w-150">
      {options.map((option) => (
        <div
          key={option.key}
          className="flex flex-row items-center justify-between space-x-8 border p-4 border-stroke dark:border-strokedark rounded-md shadow-1"
        >
          <div className="space-y-1">
            <div>{option.label}</div>
            <span className="text-wrap text-sm">{option.caption}</span>
          </div>
          <Switch
            checked={settings[option.key]}
            onChange={handleSwitch(option.key)}
          />
        </div>
      ))}
    </div>
  );
}
