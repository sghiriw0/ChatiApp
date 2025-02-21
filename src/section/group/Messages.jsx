import React, { useEffect, useRef } from "react";

export default function Messages() {
  const containerRef = useRef(null);

  const currentGroup = null;

  const MSG_LIST = [];

  useEffect(() => {
    // Scroll to the bottom of the container on mount
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [currentGroup, MSG_LIST]);

  return (
    <div
      ref={containerRef}
      className="max-h-full space-y-3.5 overflow-y-auto no-scrollbar grow bg-center bg-meta-9 dark:bg-meta-4 bg-opacity-10"
    >
      <div className="px-6 py-7.5">{/* Render Group Messages here */}</div>
    </div>
  );
}
