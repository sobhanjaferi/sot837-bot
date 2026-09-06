import { ReactNode } from "react";
import History from "@/components/History";

export default function SideBar(): ReactNode {
  return (
    <aside className="hidden lg:flex flex-col justify-start items-center gap-5 border-l border-gray-300 dark:border-gray-600 w-100 xl:w-150 h-full pt-30 px-5">
      <History listClassName="h-110 pr-2" />
    </aside>
  );
}
