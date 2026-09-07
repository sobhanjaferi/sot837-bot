"use client";

import { FetchData } from "@/helpers/FetchData";
import { create } from "zustand";
import { ChatsType, MessagesType, MessageType } from "../../types/chat";

export type MessageStoreType = {
  messages: MessagesType;
  chatRoomId: number | null;
  handleGetMessage: (chatId?: number) => Promise<void>;
  handleAddMessage: (message: MessageType) => Promise<void>;
};

export const useMessageStore = create<MessageStoreType>()((set) => ({
  messages: [],
  chatRoomId: null,

  handleGetMessage: async (chatId) => {
    try {
      if (chatId) {
        set({
          messages: [],
          chatRoomId: chatId,
        });

        const messages = await FetchData<MessagesType>(
          `http://localhost:8000/api/chats/${chatId}/messages`,
        );
        set({ messages, chatRoomId: chatId });

        return;
      }

      const chats = await FetchData<ChatsType>(
        `http://localhost:8000/api/chats`,
      );

      const lastChat = chats[0];

      if (!lastChat) {
        set({ messages: [], chatRoomId: null });
        return;
      }

      const messages = await FetchData<MessagesType>(
        `http://localhost:8000/api/chats/${lastChat.id}/messages`,
      );

      set({ messages, chatRoomId: lastChat.id });
    } catch (error) {
      console.error("Failed to get messages:", error);
    }
  },

  handleAddMessage: async (message: MessageType): Promise<void> => {
    try {
      await FetchData(`http://localhost:8000/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      set((state) => ({ messages: [...state.messages, message] }));
    } catch (error) {
      console.error("Failed to send messages:", error);
    }
  },
}));
