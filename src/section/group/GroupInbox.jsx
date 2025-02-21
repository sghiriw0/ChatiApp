import React, { useState } from "react";
import Header from "./Header";
import Messages from "./Messages";
import Input from "./Input";
import GroupProfile from "./GroupProfile";

export default function GroupInbox() {
  const [threadOpen, setThreadOpen] = useState(false);
  const [groupInfoOpen, setGroupInfoOpen] = useState(false);

  const handleToggleGroupInfo = () => {
    setGroupInfoOpen((p) => !p);
  };

  return (
    <>
      <div
        className={`flex h-full flex-col border-l border-stroke dark:border-strokedark w-full ${
          threadOpen || groupInfoOpen ? "xl:w-1/2" : "xl:w-3/4"
        } `}
      >
        {/* Header */}
        <Header handleToggleGroupInfo={handleToggleGroupInfo} />

        {/* List of Messages */}
        <Messages />

        {/* Input */}
        <Input />
      </div>

      {/*  */}
      <div className="xl:w-1/4">
        <GroupProfile handleToggleUserInfo={handleToggleGroupInfo} />
      </div>
    </>
  );
}
