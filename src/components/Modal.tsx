import React from "react"
import { CreateProduct } from "./CreateProduct"

interface ModalProps {
  title: string
  children: React.ReactNode
}

export const Modal = (props: ModalProps) => {
  return (
    <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0">
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h1 className="text-2xl mb-2">{props.title}</h1>
        {props.children}
      </div>
    </div>
  )
}