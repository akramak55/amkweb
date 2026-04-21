import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  size?: "sm" | "md" | "lg" | "xl" | "full";
} & ComponentPropsWithoutRef<T>;

const sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
} as const;

export function Container<T extends ElementType = "div">({
  as,
  size = "xl",
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Comp = (as ?? "div") as ElementType;
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
