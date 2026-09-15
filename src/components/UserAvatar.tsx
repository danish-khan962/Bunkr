"use client";

import Image from "next/image"

const UserAvatar = () => {
  return (
    <Image
    alt="avatar"
    height={30}
    width={30}
    className="rounded-full cursor-pointer"
    src={"/images/bisky.jpg"}
    />
  )
}

export default UserAvatar