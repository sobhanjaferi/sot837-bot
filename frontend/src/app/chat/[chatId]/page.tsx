"use client";

import Chat from "@/features/Chat/Chat";
import { useMessageStore } from "@/store/MessageStore";
import { useParams } from "next/navigation";
import { ReactElement, useEffect } from "react";

export default function ChatRoomPage(): ReactElement {
  const { chatId } = useParams<{ chatId: string }>();

  const handleGetMessage = useMessageStore((state) => state.handleGetMessage);

  useEffect(() => {
    if (!chatId) return;

    console.log("Loading chat:", chatId);

    handleGetMessage(Number(chatId));
  }, [chatId, handleGetMessage]);

  return (
    <main className="w-screen h-screen p-2 flex justify-center items-center">
      <Chat />
    </main>
  );
}
