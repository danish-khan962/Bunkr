"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Momo_Trust_Display } from "next/font/google";

const LogoFont = Momo_Trust_Display({
    subsets: ['latin'],
    weight: ['400']
})

const Logo = () => {

    const router = useRouter();

    return (
        <div className="flex flex-row justify-center  cursor-pointer">
            <Image
                src={"/images/logo.png"}
                alt="logo"
                height={1000}
                width={1000}
                className="h-5 sm:h-7 md:h-8 w-auto"
            />
            {/* <div className={`${LogoFont.className} font-extrabold text-xl sm:text-2xl md:text-3xl bg-linear-to-bl from-[#FC7D9B] to-[#F7418F] text-transparent bg-clip-text align-baseline`}>
                unkr
            </div> */}
        </div>
    )
}

export default Logo