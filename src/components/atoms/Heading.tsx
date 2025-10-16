import React, { ReactNode } from "react";
import { cn } from "../molecules/Button/CN";

export default function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-2xl font-medium sm:text-3xl mb-4", className)}>
      {children}
    </h3>
  );
}
