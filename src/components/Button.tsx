"use client";

import { IconType } from "react-icons";

interface ButtonProps{
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    label: string,
    disabled?: boolean,
    small?: boolean,
    outline?: boolean, 
    icon?: IconType,
}

const Button: React.FC<ButtonProps> = ({
    onClick, label, disabled, small, outline, icon: Icon
}) => {
  return (
    <button 
    onClick={onClick}
    disabled={disabled}
    className={`
        relative disabled:opacity-70 disabled:cursor-not-allowed
        rounded-xl hover:opacity-80 transition w-full cursor-pointer
        ${outline? "border border-black" : "border-rose-400"}
        ${outline? "bg-white" : "bg-linear-to-bl from-[#fc7d9b] to-[#F7418F]"}
        ${outline? "text-black" : "text-white"}
        ${small? "text-sm" : "text-lg"}
        ${small? "font-light" : "font-semibold"}
        ${small? "py-1" : "py-3"}
    `}>

        {Icon &&(
            <Icon
            size={25}
            className="absolute left-3 top-3"
            />
        )}
        {label}
    </button>
  )
}

export default Button