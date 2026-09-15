"use client";

import { BiSearch } from "react-icons/bi"

const Search = () => {
  return (
    <div
    className='flex flex-row w-full md:w-auto justify-between items-center shadow-neutral-200 shadow-sm md:shadow-md inset-shadow-sm py-1.5 rounded-full hover:shadow-lg transition cursor-pointer'
    >
        <div className='px-6 font-medium text-sm text-neutral-800 hover:text-neutral-900'>
            Anywhere
        </div>
        <div className='hidden sm:block px-6 flex-1 font-medium text-sm text-center text-neutral-800 hover:text-neutral-900 border-x-[0.5px] border-gray-300'>
            Any Week
        </div>
        <div className='flex flex-row justify-between items-center pl-6 pr-2 gap-3'>
            <span className="hidden sm:block font-medium text-sm text-neutral-500 hover:text-neutral-600">Add Guests</span>
            <div className='p-1 md:p-2 text-xl bg-linear-to-bl from-[#fc7d9b] to-[#F7418F] text-white rounded-full'>
                <BiSearch />
            </div>
        </div>
    </div>
  )
}

export default Search