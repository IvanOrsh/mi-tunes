"use client";

import { Box } from "@/shared/ui";

export default function Error() {
  return (
    <Box className="h-full flex items-center justify-center">
      <div className="text-zinc-400">Something went wrong.</div>
    </Box>
  );
}
