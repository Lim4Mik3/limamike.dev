import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

export function Separator(props: ComponentProps<'span'>) {
  return (
    <span 
      {...props}
      aria-hidden 
      className={cn("flex w-full h-[1px] bg-[#E3EAEF]", props.className)}
    />
  )
}