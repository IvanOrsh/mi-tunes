"use client";

import { Modal } from "@/shared/ui";
import { useUploadModal } from "..";

export default function UploadModal() {
  const uploadModal = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      // TODO: reset the form
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Upload"
      description="Upload your files"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Upload Content
    </Modal>
  );
}
