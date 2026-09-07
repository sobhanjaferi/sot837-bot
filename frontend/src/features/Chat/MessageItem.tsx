import { ReactNode } from "react";
import { MessageType } from "../../../types/chat";

type Props = Pick<MessageType, "content" | "type">;

export default function MessageItem({
  content: message,
  type,
}: Props): ReactNode {
  const isUser: boolean = type === "user";

  return (
    <li
      className={`w-full ${isUser ? "pl-15" : "pr-15"}`}
      dir={isUser ? "rtl" : "ltr"}
    >
      <p
        className={`p-3 w-fit max-w-full rounded-2xl ${
          isUser
            ? "bg-green-600 text-white"
            : "bg-gray-100 dark:bg-white/20 border border-gray-300 dark:border-gray-600"
        }`}
        dir="ltr"
      >
        {message}
      </p>
    </li>
  );
}
