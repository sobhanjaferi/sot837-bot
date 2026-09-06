import { ComponentProps, ReactElement } from "react";
import Button from "./Button";

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
  return (
    <div className={`w-full bg-white dark:bg-black/0 p-3 ${className}`}>
      <Button
        className={`p-2 w-full border border-gray-400 dark:border-gray-500 text-cyan-700 dark:text-cyan-500 text-lg rounded-xl cursor-pointer transition-all duration-150 ease-in-out hover:-translate-y-1 active:opacity-30 mb-5 ${buttonClassName}`}
      >
        گفتگو جدید +
      </Button>

      <ul
        className={`w-full flex flex-col justify-start items-end text-right gap-3 overflow-auto ${listClassName}`}
        {...otherProps}
      >
        <h2 className="text-gray-600 dark:text-gray-500 text-lg">امروز</h2>

        <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
          پیشنویس ایمیل به تیم فروش
        </li>

        <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
          خلاصه گذارش بازار سه ماهه
        </li>

        <h2 className="text-gray-600 dark:text-gray-500 text-lg">هفته گذشته</h2>

        <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
          برنامه سفر به اصفهان
        </li>

        <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
          ویرایش رزومه کاری
        </li>

        <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
          ایده برای اسم فروشگاه
        </li>

        <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
          ایده برای اسم فروشگاه
        </li>
      </ul>
    </div>
  );
}
