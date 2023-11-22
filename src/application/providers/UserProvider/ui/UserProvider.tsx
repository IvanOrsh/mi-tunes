"use client";

import { PropsWithChildren } from "react";
import { MyUserContextProvider } from "./MyUserContextProvider";

export default function UserProvider({ children }: PropsWithChildren) {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
}
