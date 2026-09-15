"use client";
import { cn } from "@/lib/utils";

interface ContainerProps{
    children?: React.ReactNode,
    className?: string,
}

const Container: React.FC<ContainerProps> = ({
    children, className
}) => {
  return (
    <div
    className={cn(
        "max-w-[2100px] w-full xl:px-20 md:px-10 sm:px-6 px-4 mx-auto",
        className,
    )}
    >
        {children}
    </div>
  )
}

export default Container