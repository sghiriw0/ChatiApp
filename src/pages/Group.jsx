import React from "react";
import GroupList from "../section/group/GroupList";
import GroupInbox from "../section/group/GroupInbox";
import GifModal from "../components/GifModal";
import VoiceRecorder from "../components/VoiceRecorder";
import MediaPicker from "../components/MediaPicker";
import DocumentPicker from "../components/DocumentPicker";

export default function Group() {
  return (
    <>
      <div className="flex w-full h-full">
        {/* Group List -> Add Group */}
        <GroupList />
        {/* Group Inbox - It contains Thread */}
        <GroupInbox />
      </div>

      <GifModal />
      <VoiceRecorder />
      <MediaPicker />
      <DocumentPicker />
    </>
  );
}
