import { cn } from "@/utils/cn";
import React from "react";

function Button({ children, className }) {
  return (
    <button
      className={cn(
        "px-4 text-[14px] uppercase py-[9px] font-semibold rounded bg-transparent ",className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
