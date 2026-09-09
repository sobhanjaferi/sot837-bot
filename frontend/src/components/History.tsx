"use client";

import { ComponentProps, ReactElement, useEffect } from "react";
import Button from "./Button";
import { redirect, usePathname } from "next/navigation";
import { useChatStore } from "@/store/ChatStore";

type Props = ComponentProps<"ul"> & {
  buttonClassName?: string;
  listClassName?: string;
};

export default function History({
  className,
  buttonClassName,
  listClassName,
  ...otherProps
}: Props): ReactElement {
  const history = useChatStore((state) => state.chats);

  const handleGetChats = useChatStore((state) => state.handleGetChats);
  const handleAddChat = useChatStore((state) => state.handleAddChat);

  useEffect(() => {
    handleGetChats();
  }, [handleGetChats]);

  const handleAction = async () => {
    const chat = await handleAddChat();

    redirect(`/chat/${chat.id}`);
  };

  const url = usePathname();

  return (
    <form
      action={handleAction}
      className={`w-full overflow-auto bg-white dark:bg-white/0 ${className}`}
    >
      <Button
        type="submit"
        className={`mb-5 w-full cursor-pointer rounded-xl border border-gray-400 p-2 text-lg text-cyan-700 transition-all duration-150 ease-in-out hover:-translate-y-1 active:opacity-30 dark:border-gray-500 dark:text-cyan-500 ${buttonClassName}`}
      >
        گفتگو جدید +
      </Button>

      <ul
        className={`flex w-full flex-col items-end justify-start gap-3 pr-2 text-right ${listClassName}`}
        {...otherProps}
      >
        <h2 className="text-lg text-gray-600 dark:text-gray-500">امروز</h2>

        {history.map((item) => (
          <li
            onClick={() => redirect(`/chat/${item.id}`)}
            key={item.id}
            dir="rtl"
            className={`w-full rounded-lg ${url == `/chat/${item.id}` ? "bg-gray-400 dark:bg-white/30" : "bg-gray-200 dark:bg-white/10"} px-5 py-3  cursor-pointer active:opacity-30`}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </form>
  );
}
