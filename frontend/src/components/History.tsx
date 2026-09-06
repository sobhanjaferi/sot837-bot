"use client";

import {
  ComponentProps,
  Fragment,
  ReactElement,
  useEffect,
  useState,
} from "react";
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
  const { year, month, day } = getDate();
  const [toDay, setToDay] = useState<MessageType[]>([]);
  const [lastWeek, setLastWeek] = useState<MessageType[]>([]);

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
      const oldDate: string = `${year}-${month}-${parseInt(day) - 7}`;

      const todayMessages: MessageType[] = data.filter(
        (item) => item.date === freshDate,
      );

      setToDay(todayMessages);

      const yesterdayMessages: MessageType[] = data.filter(
        (item) => item.date === oldDate,
      );

      setLastWeek(yesterdayMessages);
    };

    handleChangeDate();
  }, [year, month, day]);

  return (
    <div
      className={`w-full bg-white dark:bg-white/0 overflow-auto ${className}`}
    >
      <Button
        className={`p-2 w-full border border-gray-400 dark:border-gray-500 text-cyan-700 dark:text-cyan-500 text-lg rounded-xl cursor-pointer transition-all duration-150 ease-in-out hover:-translate-y-1 active:opacity-30 mb-5 ${buttonClassName}`}
      >
        گفتگو جدید +
      </Button>

      <ul
        className={`w-full flex flex-col justify-start items-end text-right gap-3 pr-2 ${listClassName}`}
        {...otherProps}
      >
        {toDay.length !== 0 && (
          <h2 className="text-gray-600 dark:text-gray-500 text-lg">امروز</h2>
        )}

        {toDay.map((chat) => {
          const words = chat.content.split(" ");
          const shortText =
            words.length > 2 ? words.slice(0, 5).join(" ") + "..." : words;

          return (
            <li
              key={chat.id}
              dir="rtl"
              className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-white/10"
            >
              {shortText}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
