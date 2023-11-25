"use client";

import { useEffect, useState } from "react";

import { AuthModal } from "@/features/auth";
import { UploadModal } from "@/features/upload";
import { SubscribeModal } from "@/features/subscribe";
import { ProductWithPrice } from "@/application/types";

type ModalProviderProps = {
  products: ProductWithPrice[];
};

export default function ModalProvider({ products }: ModalProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
}
