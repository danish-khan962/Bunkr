"use client";

import axios from "axios"
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState, useCallback } from "react";
import useRegisterModal from "@/hooks/useRegisterModal";

import { Field, FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";

const RegisterModal = () => {

  const RegisterModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
      .then(() => {
        RegisterModal.onClose();
      })
      .catch((error) => {
        toast.error('Something went wrong')
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const bodyContent = (
    <div className="flex flex-col gap-2
    
    md:gap-3">
      <Heading
        heading="Welcome to Bunkr"
        subHeading="Create your account!"
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
        id="name"
        label="Name*"
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
      label="Continue with Google"
      icon={FcGoogle}
      onClick={() => {}}
      />
      <Button
      outline
      label="Continue with Github"
      icon={AiFillGithub}
      onClick={() => {}}
      />
      <div className="flex flex-row justify-center items-center text-center gap-2">
        <div className="text-sm md:text-base font-light text-neutral-700">
          Already have an account?
        </div>
        <div 
        onClick={RegisterModal.onClose}
        className="hover:font-medium transition ease-in-out duration-200 hover:underline hover:text-[#F7418F] cursor-pointer">
           Log in 
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={RegisterModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={RegisterModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal