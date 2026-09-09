import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"button">;

export default function Button({
  children,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={`flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out active:opacity-30 outline-0 ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
