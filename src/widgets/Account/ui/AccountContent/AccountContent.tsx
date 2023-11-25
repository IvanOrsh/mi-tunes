"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { useUser } from "@/application/providers/UserProvider";
import { useSubscribeModal } from "@/features/subscribe";
import { useRouter } from "next/navigation";
import { postData } from "@/application/libs/stripe/helpers";
import { Button } from "@/shared/ui";

export default function AccountContent() {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, user, subscription } = useUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);

    try {
      const { url, error } = await postData({
        url: "/api/create-portal-link",
      });

      window.location.assign(url);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8">
      {!subscription ? (
        <div className="space-y-4">
          <p className="text-white">No active subscription.</p>
          <Button onClick={subscribeModal.onOpen} className="w-[300px]">
            Subscribe
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-white">
            You are currently on the{" "}
            <b>{subscription?.prices?.products?.name}</b> plan.
          </p>
          <Button
            disabled={loading || isLoading}
            onClick={redirectToCustomerPortal}
            className="w-[300px]"
          >
            Open customer portal
          </Button>
        </div>
      )}
    </div>
  );
}
