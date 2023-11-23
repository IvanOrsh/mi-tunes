"use client";

import { useEffect, useState } from "react";

import { AuthModal } from "@/features/auth";
import { UploadModal } from "@/features/upload";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
}
