"use client";

import { PropsWithChildren } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
};
export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { isOpen, onChange, title, description, children } = props;

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={onChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed backdrop-blur-sm" />
          <Dialog.Content className="fixed drop-shadow-md border border-zinc-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none">
            <Dialog.Title className="text-xl text-center font-bold mb-4">
              {title}
            </Dialog.Title>
            <Dialog.Description className="text-sm leading-normal text-center mb-5">
              {description}
            </Dialog.Description>

            <div>{children}</div>

            <Dialog.Close asChild>
              <button className="text-zinc-400 hover:text-zinc-100 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none">
                <IoMdClose size={24} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
