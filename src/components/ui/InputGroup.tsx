import { cn } from "@/utilities/utils";
import { ComponentProps, FC } from "react";

type Props = FC<ComponentProps<"input"> & { label?: string }>;

const InputGroup: Props = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {!!label && (
        <label htmlFor={props.id} className="text-lg font-medium text-black">
          {label}
          {props.required ? <span className="text-[#B73A3A]">*</span> : ""}
        </label>
      )}
      <input
        className={cn(
          "h-12 w-full rounded-[10px] border border-[#838383]/50 bg-white px-4 text-base font-medium placeholder:text-[#8F8F8F]",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default InputGroup;
