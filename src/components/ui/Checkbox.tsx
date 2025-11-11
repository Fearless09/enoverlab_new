"use client";

import { cn } from "@/utilities/utils";
import { CheckIcon } from "lucide-react";
import { ComponentProps, FC } from "react";

type Props = FC<ComponentProps<"input"> & { label: string }>;

const Checkbox: Props = ({ label, className, type = "checkbox", ...props }) => {
  return (
    <div className="relative flex items-center gap-2 overflow-clip">
      <input
        type={type}
        className={cn(
          "peer absolute inset-0 size-5 appearance-none",
          className,
        )}
        {...props}
      />
      <span
        className={cn(
          "transition-300 flex size-5.5 items-center justify-center rounded-md border border-[#838383]/50",
          "peer-checked:border-primary-300 peer-checked:bg-primary-300",
        )}
      >
        <CheckIcon className="size-3.5 stroke-5 text-white" />
      </span>
      <label htmlFor={props.id} className="text-sm text-black md:text-base">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
