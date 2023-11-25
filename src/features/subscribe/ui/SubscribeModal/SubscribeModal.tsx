"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { Price, ProductWithPrice } from "@/application/types";
import { Button, Modal } from "@/shared/ui";
import { useUser } from "@/application/providers/UserProvider";
import { postData } from "@/application/libs/stripe/helpers";
import { getStripe } from "@/application/libs/stripe/stripeClient";
import { useSubscribeModal } from "../..";

type SubscribeModalProps = {
  products: ProductWithPrice[];
};

const formatPrice = (price: Price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: 0,
  });

  return formatter.format((price?.unit_amount || 0) / 100);
};

export default function SubscribeModal(props: SubscribeModalProps) {
  const { products } = props;

  const subscribeModal = useSubscribeModal();
  const { user, isLoading, subscription } = useUser();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const onChange = (open: boolean) => {
    if (!open) {
      subscribeModal.onClose();
    }
  };

  const handleCheckoutPrice = async (price: Price) => {
    setPriceIdLoading(price.id);

    if (!user) {
      setPriceIdLoading(undefined);
      return toast.error("Must be logged in");
    }

    if (subscription) {
      setPriceIdLoading(undefined);
      return toast.error("Already subscribed");
    }

    try {
      const resp = await postData({
        url: "/api/create-checkout-session",
        data: { price },
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId: resp.sessionId });
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  let content = (
    <div className="text-center">
      No products available. Please check back later!
    </div>
  );

  if (products.length) {
    content = (
      <div>
        {products.map((product) => {
          if (!product.prices.length) {
            return <div key={product.id}>No prices available</div>;
          }

          return product.prices.map((price) => {
            return (
              <Button
                key={price.id}
                onClick={() => handleCheckoutPrice(price)}
                disabled={isLoading || price.id === priceIdLoading}
                className="mb-4"
              >{`Subscribe for ${formatPrice(price)} a ${
                price.interval
              }`}</Button>
            );
          });
        })}
      </div>
    );
  }

  if (subscription) {
    content = <div className="text-center">Already subscribed</div>;
  }

  return (
    <Modal
      title="Only for premium users"
      description="Unlock premium features"
      isOpen={subscribeModal.isOpen}
      onChange={onChange}
    >
      {content}
    </Modal>
  );
}
