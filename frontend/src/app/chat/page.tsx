"use client";

import Chat from "@/features/Chat/Chat";
import { useMessageStore } from "@/store/MessageStore";
import { ReactNode, useEffect } from "react";

export default function ChatPage(): ReactNode {
  const handleGetMessage = useMessageStore((state) => state.handleGetMessage);

  useEffect(() => {
    handleGetMessage();
  }, [handleGetMessage]);

  return (
    <main className="w-screen h-screen p-2 flex justify-center items-center">
      <Chat />
    </main>
  );
}
