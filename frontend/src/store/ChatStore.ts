"use client";

import { FetchData } from "@/helpers/FetchData";
import { create } from "zustand";
import { ChatsType, ChatType } from "../../types/chat";

type ChatStoreType = {
  chats: ChatsType;
  handleGetChats: () => Promise<void>;
  handleAddChat: () => Promise<ChatType>;
  handleUpdateChatTitle: (chatId: number, title: string) => Promise<void>;
};

export const useChatStore = create<ChatStoreType>()((set) => ({
  chats: [],

  handleGetChats: async () => {
    try {
      const chats = await FetchData<ChatsType>(
        "http://localhost:8000/api/chats",
      );

      set({ chats });
    } catch (error) {
      console.error("Failed to get chats:", error);
    }
  },

  handleAddChat: async () => {
    const newChat = await FetchData<ChatType>(
      "http://localhost:8000/api/chats",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "New Chat",
        }),
      },
    );

    set((state) => ({
      chats: [newChat, ...state.chats],
    }));

    return newChat;
  },

  handleUpdateChatTitle: async (chatId, title) => {
    try {
      await FetchData(`http://localhost:8000/api/chats/${chatId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      });

      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                title,
              }
            : chat,
        ),
      }));
    } catch (error) {
      console.error("Failed to update chat title:", error);
    }
  },
}));
