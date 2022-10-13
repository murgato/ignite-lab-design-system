import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Compo = asChild ? Slot : "button";
  return (
    <Compo
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring=2 ring-white"
      )}
    >
      {children}
    </Compo>
  );
}
