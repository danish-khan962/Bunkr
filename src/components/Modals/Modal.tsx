"use client";

import { useCallback, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button";

interface ModalProps {
    isOpen?: boolean,
    onClose: () => void,
    onSubmit: () => void,
    title?: string,
    body?: React.ReactElement,
    footer?: React.ReactElement,
    actionLabel: string,
    disabled?: boolean,
    secondaryAction?: () => void,
    secondaryActionLabel?: string,
}

const Modal: React.FC<ModalProps> = ({
    isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled, secondaryAction, secondaryActionLabel
}) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen])

    // Closing ModaL
    const handleCloseModal = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);

        setTimeout(() => {
            onClose();
        }, 300)
    }, [disabled, onClose])

    // Submitting modal
    const handleSubmitModal = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit])

    // Secondary Action
    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [disabled, secondaryAction])

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="fixed flex justify-center items-center inset-0 overflow-x-hidden overflow-y-auto z-50 bg-stone-800/70">
                <div className="relative w-full md:w-4/6 lg:w-3/6 xl:2/5 my-6 mx-auto h-full md:h-auto p-2">
                    {/* Content */}
                    <div className={`
                    h-full translate duration-300 
                    ${showModal ? "translate-y-0" : "translate-y-full"}
                    ${showModal ? "opacity-100" : "opacity-0"}
                    `}>
                        <div className="relative flex flex-col h-full md:h-auto w-full translate bg-white border-none outline-none focus:outline-none rounded-xl shadow-lg">
                            {/* Header */}
                            <div className="flex justify-center items-center relative border-b border-neutral-300 rounded-t p-6">
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute left-6 border-none outline-none transition hover:bg-neutral-100 cursor-pointer p-1 rounded-full">
                                    <IoCloseOutline size={25} />
                                </button>
                                <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                                    {title}
                                </h1>
                            </div>

                            {/* Body */}
                            <div className="relative p-6 flex-auto">
                                {body}
                            </div>

                            {/* Footer */}
                            <div className="flex flex-col gap-5 p-6">
                                <div className="flex flex-row justify-between items-center gap-4">
                                    {secondaryActionLabel && secondaryAction && (
                                        <Button
                                            outline
                                            disabled={disabled}
                                            label={secondaryActionLabel}
                                            onClick={handleSecondaryAction}
                                        />
                                    )}

                                    <Button
                                        disabled={disabled}
                                        label={actionLabel}
                                        onClick={handleSubmitModal}
                                    />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal