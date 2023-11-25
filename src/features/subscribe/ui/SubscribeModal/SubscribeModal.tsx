"use client";

import { Modal } from "@/shared/ui";

export default function SubscribeModal() {
  return (
    <Modal
      title="Only for premium users"
      description="Unlock premium features"
      isOpen
      onChange={() => {
        // TODO: handle modal
      }}
    ></Modal>
  );
}
