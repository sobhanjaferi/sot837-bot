"use client";

import { ComponentProps, ReactElement, useEffect, useState } from "react";
import Button from "./Button";
import { getDate } from "@/data/date";
import { FetchData } from "@/helpers/FetchData";
import { MessageType } from "@/store/MessageStore";

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
  const { year, month, day, hours, minutes } = getDate();
  const [toDay, setToDay] = useState<MessageType[]>([]);

  useEffect(() => {
    const handleChangeDate = async (): Promise<void> => {
      const handleFetch = async (): Promise<MessageType[]> => {
        const getHistory = await FetchData<MessageType[]>(
          "http://localhost:8000/api/messages",
        );

        return getHistory;
      };

      const data = await handleFetch();
      const freshDate: string = `${year}-${month}-${day}`;
      const time: string = `${hours}:${minutes}`;

      const todayMessages: MessageType[] = data.filter(
        (item) => item.date === freshDate,
      );

      setToDay(todayMessages);
    };

    handleChangeDate();
  }, [year, month, day]);

  return (
    <div
      className={`w-full overflow-auto bg-white dark:bg-white/0 ${className}`}
    >
      <Button
        className={`mb-5 w-full cursor-pointer rounded-xl border border-gray-400 p-2 text-lg text-cyan-700 transition-all duration-150 ease-in-out hover:-translate-y-1 active:opacity-30 dark:border-gray-500 dark:text-cyan-500 ${buttonClassName}`}
      >
        گفتگو جدید +
      </Button>

      <ul
        className={`flex w-full flex-col items-end justify-start gap-3 pr-2 text-right ${listClassName}`}
        {...otherProps}
      >
        {toDay.length !== 0 && (
          <h2 className="text-lg text-gray-600 dark:text-gray-500">امروز</h2>
        )}

        {toDay.map((chat) => {
          const words = chat.content.split(" ");
          const shortText =
            words.length > 2 ? words.slice(0, 5).join(" ") + " ..." : words;

          return (
            <li
              key={chat.id}
              dir="rtl"
              className="w-full rounded-lg bg-gray-200 px-5 py-3 dark:bg-white/10"
            >
              {shortText}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
