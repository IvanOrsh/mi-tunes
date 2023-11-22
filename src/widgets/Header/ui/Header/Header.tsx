"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FaUserAlt } from "react-icons/fa";

import { useAuthModal } from "@/features/auth";
import { Button } from "@/shared/ui";
import { useUser } from "@/application/providers/UserProvider";

type HeaderProps = {
  className?: string;
};

export default function Header(props: PropsWithChildren<HeaderProps>) {
  const { className, children } = props;

  const router = useRouter();
  const supabaseClent = useSupabaseClient();
  // TODO: refactor to pass useAuthModal from page?
  const authModal = useAuthModal();
  const { user } = useUser();

  const handleLogout = async () => {
    const error = await supabaseClent.auth.signOut();

    // TODO: reset any playing songs in future

    router.refresh();

    if (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.forward();
  };

  return (
    <header
      className={twMerge("h-fit bg-gradient-to-b from-zinc-700 p-6", className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={handleBack}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition duration-300"
          >
            <RxCaretLeft size={40} />
          </button>

          <button
            onClick={handleNext}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition duration-300"
          >
            <RxCaretRight size={40} />
          </button>
        </div>

        {/* mobile */}
        <nav className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition duration-300">
            <HiHome className="text-black" size={30} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition duration-300">
            <BiSearch className="text-black" size={30} />
          </button>
        </nav>

        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button
                onClick={handleLogout}
                className="bg-white text-black hover:text-white px-6 py-2"
              >
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-white text-black hover:text-white"
              >
                <FaUserAlt size={20} />
              </Button>
            </div>
          ) : (
            <>
              {/* sign up/log in */}
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-transparent text-neutral-300 font-medium"
                >
                  Sing up
                </Button>
              </div>

              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white text-black hover:text-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* children */}
      {children}
    </header>
  );
}
