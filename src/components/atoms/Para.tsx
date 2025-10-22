import { ReactNode } from "react";
import { cn } from "../molecules/Button/CN";

export default function Para({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-text-primary sm:leading-5.5 tracking-wide",
        className
      )}
    >
      {children}
    </p>
  );
}
