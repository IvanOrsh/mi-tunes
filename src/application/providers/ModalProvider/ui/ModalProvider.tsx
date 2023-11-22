"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/shared/ui";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  console.log(isMounted);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        isOpen
        onChange={() => {}}
        description="no description"
        title="no title"
      >
        Modals
      </Modal>
    </>
  );
}
