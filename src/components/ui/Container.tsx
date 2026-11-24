import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Shared horizontal container so every section aligns to one grid. */
export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}
