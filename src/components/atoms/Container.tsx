import React, { ReactNode } from "react";
import { cn } from "../molecules/Button/CN";

export type TContainerProps = {
  className?: string;
  children?: ReactNode;
};

export default function Container({ className, children }: TContainerProps) {
  return (
    <div className={cn("max-w-[1500px] mx-auto", className)}>{children}</div>
  );
}
