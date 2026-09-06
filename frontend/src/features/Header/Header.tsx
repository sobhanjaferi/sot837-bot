"use client";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";
import History from "@/components/History";

export default function Header(): ReactNode {
  const [isOpenHistory, setIsOpenHistory] = useState<boolean>(false);

  const handleClickButtonHistory = (): void => {
    setIsOpenHistory(!isOpenHistory);
  };

  return (
    <div className="absolute w-full z-10">
      <header
        className={`w-full p-5 border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-black lg:rounded-b-none ${isOpenHistory ? "rounded-b-none" : "shadow-md"} rounded-3xl absolute flex justify-start items-center gap-5 transition-all duration-300`}
      >
        <div className="flex justify-start items-center gap-3">
          <Image
            src={"/logo.svg"}
            alt="account image"
            width={2000}
            height={2000}
            className="w-15 p-1 bg-gray-300 dark:bg-gray-600 rounded-full"
          />

          <div>
            <Logo className="text-xl">-bot</Logo>
            <h4 className="text-gray-400 text-sm">Personal chat bot</h4>
          </div>
        </div>

        <Button
          onClick={handleClickButtonHistory}
          className={`aspect-square lg:hidden p-1 rounded-full border border-gray-300 ${isOpenHistory && "rotate-180"}`}
        >
          <ChevronDown className={`text-gray-500`} />
        </Button>
      </header>

      <div
        className={`translate-y-25 transition-all duration-500 ease-in-out ${!isOpenHistory && "-z-10 bg-white/0 dark:bg-black/0 "} dark:bg-black lg:hidden`}
      >
        <History
          className={`max-h-65 shadow-lg shadow-gray-600 dark:shadow-white/10 transition-all duration-500 ease-in-out p-3 ${isOpenHistory ? "h-65" : "h-0 opacity-0 dark:bg-black/0"}`}
          listClassName="h-45 pr-2"
        />
      </div>
    </div>
  );
}
