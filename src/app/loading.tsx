"use client";

import { BeatLoader } from "react-spinners";

import { Box } from "@/shared/ui";

export default function Loading() {
  return (
    <Box className="h-full flex items-center justify-center">
      <BeatLoader color="#f62d4c" size={40} />
    </Box>
  );
}
