import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

type AvailableIcons = 'stock-blocks' | 'energy' | 'critical';

const IconDictionary: Record<AvailableIcons, string> = {
  "stock-blocks": '/stack-blocks.svg',
  "energy": '/energy.svg',
  "critical": '/critical.svg',
};

type Props = ComponentProps<'button'> & {
  children: string;
  isActive?: boolean;
  variant?: 'primary' | 'secondary';
  icon?: AvailableIcons
} 

export function Button({ 
  children, 
  isActive = false,
  variant = 'primary', 
  icon = 'stock-blocks',
  className,
  ...props 
}: Props) {
  return (
    <button
      className={cn("bg-blue-500 flex items-center justify-center gap-2 py-1 px-2 rounded-[3px] text-xs leading-5 font-semibold text-white hover:brightness-90 transition-all duration-200", {
        "bg-blue-200": isActive && variant === 'primary',
        "px-[0.875rem] py-2 text-sm text-[#77818C] bg-white border border-[#D8DFE6]": variant === 'secondary',
        "bg-blue-200 text-white color-white": isActive && variant === 'secondary',
      }, className)}
      {...props}
    >
      <img 
        aria-hidden
        className={"w-4"}
        src={IconDictionary[icon]}
      />
      {children}
    </button>
  )
}

export type { Props as ButtonProps };