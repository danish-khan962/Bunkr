"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string,
  disabled?: boolean,
  label: string,
  type?: string,
  formatPrice?: boolean,
  required?: boolean,
  register: UseFormRegister<FieldValues>
  errors: FieldErrors,
}

const Input: React.FC<InputProps> = ({
  id, disabled, label, type = 'text', formatPrice, required, register, errors
}) => {
  return (
    <div className="relative w-full">
      {formatPrice && (
        <BiDollar
          size={25}
          className="absolute text-neutral-600 top-3 left-4"
        />
      )}

      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full bg-white p-4 pt-6 font-light border-2 rounded-lg outline-none transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed
        ${formatPrice ? 'pl-7' : 'pl-4'}
        ${errors[id] ? 'border-rose-500 focus:border-rose-500' : 'border-neutral-300 focus:border-black'}
        `}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-left
        ${formatPrice ? 'left-9' : 'left-4'}
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-rose-500' : 'text-zinc-600'}
        `}
      >
        {label}
      </label>
    </div>
  )
}

export default Input