"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/shared/ui";
import { AuthModal } from "@/features/auth";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
    </>
  );
}
