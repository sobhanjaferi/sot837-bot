export type ChatsType = ChatType[];

export type ChatType = {
  id: number;
  title: string;
  created_at: string;
};

export type MessagesType = MessageType[];

export type MessageType = {
  id?: number;
  chat_id: number;
  content: string;
  type: "user" | "bot";
  date: string;
  time: string;
};
