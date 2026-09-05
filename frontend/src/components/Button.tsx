import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"button">;

export default function Button({
  children,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={`flex justify-center items-center aspect-square cursor-pointer transition-all duration-100 ease-in-out active:opacity-30 ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
