import React, { useState } from "react";
import Switch from "../../components/Switch";

export default function Notifications() {
  const [settings, setSettings] = useState({
    messageSound: true,
    typingSound: true,
  });

  const handleSwitch = (option) => (e) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [option]: e.target.checked,
    }));
  };

  const options = [
    {
      label: "Message Sound",
      caption: "Enable/Disable chime tone when you receive a new message",
      key: "messageSound",
    },
    {
      label: "Typing Sound",
      caption: "Enable/Disable typing sound when other person is typing",
      key: "typingSound",
    },
  ];

  return (
    <div className="flex flex-col w-full p-4 space-y-6 max-w-150">
      {options.map((option) => (
        <div
          key={option.key}
          className="flex flex-row items-center justify-between border p-4 border-stroke dark:border-strokedark rounded-md shadow-1"
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
