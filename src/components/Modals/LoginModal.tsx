"use client";

import { signIn } from "next-auth/react"
import axios from "axios"
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState, useCallback } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import { Field, FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { ok } from "assert";
import { useRouter } from "next/navigation";

const LoginModal = () => {

    const router = useRouter()
  const LoginModal = useLoginModal();
  const RegisterModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials', {
        ...data,
        redirect:false,
    })
    .then((callback) => {
        setIsLoading(false);

        if(callback?.ok){
            toast.success('Logged in your Bunkr');
            router.refresh();
            LoginModal.onClose();
        }

        if(callback?.error){
            toast.error(callback.error);
        }
    })
  }

  const bodyContent = (
    <div className="flex flex-col gap-2
    
    md:gap-3">
      <Heading
        heading="Welcome back"
        subHeading="Login with your credentials!"
        center
      />
      <Input
        id="email"
        label="Email*"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password*"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
    </div>
  )


  const footerContent = (
    <div className="flex flex-col justify-between items-center gap-5">
      <hr className="w-full opacity-40" />
      <Button
      outline
      label="Login with Google"
      icon={FcGoogle}
      onClick={() => {}}
      />
      <Button
      outline
      label="Login with Github"
      icon={AiFillGithub}
      onClick={() => {}}
      />
      <div className="flex flex-row justify-center items-center text-center gap-2">
        <div className="text-sm md:text-base font-light text-neutral-700">
          Don't have an account? 
        </div>
        <div 
        onClick={RegisterModal.onOpen}
        className="hover:font-medium transition ease-in-out duration-200 hover:underline hover:text-[#F7418F] cursor-pointer">
           Register
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={LoginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={LoginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal