"use client";

import { FetchData } from "@/helpers/FetchData";
import { create } from "zustand";

export type MessageType = {
  id: number | string;
  date: string;
  time: string;
  content: string;
  type: "user" | "bot";
};

export type MessageStoreType = {
  messages: MessageType[];
  handleGetMessage: () => Promise<void>;
  handleAddMessage: (message: MessageType) => Promise<void>;
};

export const useMessageStore = create<MessageStoreType>()((set) => ({
  messages: [],

  handleGetMessage: async () => {
    try {
      const res = await FetchData<MessageType[]>(
        "https://sot837-bot.onrender.com/api/messages/",
      );

      set({ messages: res.reverse() });
    } catch (error) {
      console.error("Failed to get messages:", error);
    }
  },

  handleAddMessage: async (message: MessageType): Promise<void> => {
    set((state) => ({ messages: [...state.messages, message] }));

    try {
      await FetchData("https://sot837-bot.onrender.com/api/messages/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    } catch (error) {
      console.error("Failed to send messages:", error);
    }
  },
}));
