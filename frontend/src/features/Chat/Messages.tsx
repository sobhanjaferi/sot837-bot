"use client";

import { ReactNode, useEffect } from "react";
import MessageItem from "./MessageItem";
import { useMessageStore } from "@/store/MessageStore";

export default function Messages(): ReactNode {
  const messages = useMessageStore((state) => state.messages);
  const handleGetMessage = useMessageStore((state) => state.handleGetMessage);

  useEffect(() => {
    handleGetMessage();
  }, [handleGetMessage]);

  return (
    <ul className="w-full h-full flex flex-col justify-start items-center gap-7 p-5 mt-25">
      {messages.map((message) => (
        <MessageItem {...message} key={message.id} />
      ))}
    </ul>
  );
}
