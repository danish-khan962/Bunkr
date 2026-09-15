"use client";
import { useState, useEffect } from "react";

interface ClientRenderingWrapperProps{
    children: React.ReactNode,
}

const ClientRenderingWrapper: React.FC<ClientRenderingWrapperProps> = ({
    children
}) => {

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if(!hasMounted){
        return null;
    }

  return (
    <>
        {children}
    </>
  )
}

export default ClientRenderingWrapper