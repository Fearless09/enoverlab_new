import { cn } from "@/utilities/utils";
import { ComponentProps, FC } from "react";

type Props = FC<ComponentProps<"textarea"> & { label?: string }>;

const TextAreaGroup: Props = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {!!label && (
        <label
          htmlFor={props.id}
          className="text-base font-medium text-black md:text-lg"
        >
          {label}
          {props.required ? <span className="text-[#B73A3A]">*</span> : ""}
        </label>
      )}

      <textarea
        className={cn(
          "h-[200px] w-full resize-none rounded-[10px] border border-[#838383]/50 bg-white p-4 text-base font-medium placeholder:text-[#8F8F8F]",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default TextAreaGroup;
