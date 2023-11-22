"use client";

import { Modal } from "@/shared/ui";

export default function AuthModal() {
  return (
    <Modal
      title="Welcome Back!"
      description="Login to your account"
      isOpen
      onChange={() => {}}
    >
      Auth modal children!
    </Modal>
  );
}
