"use client";

import { PropsWithChildren, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "../types/types_db";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

export default function SupabaseProvider({ children }: PropsWithChildren) {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}
