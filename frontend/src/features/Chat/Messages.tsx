"use client";

import { ReactNode } from "react";
import MessageItem from "./MessageItem";
import { useMessageStore } from "@/store/MessageStore";

export default function Messages(): ReactNode {
  const messages = useMessageStore((state) => state.messages);
  return (
    <ul className="w-full h-full flex flex-col justify-start items-center gap-7 p-5 mt-25">
      {messages.map((message) => (
        <MessageItem {...message} key={message?.id} />
      ))}
    </ul>
  );
}
