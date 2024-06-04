import React from "react";
import OrderDetailCard from "./OrderDetailsCard";
import { Orders } from "@/lib/Types";

const Order = () => {
  return (
    <div className="container mx-auto p-4">
      <OrderDetailCard order={orderDetails} />
    </div>
  );
};

export default Order;

export const orderDetails: Orders = {
  items: [
    {
      name: "Cozy Blanket",
      price: 29.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
    {
      name: "Autumn Mug",
      price: 12.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
  ],
  subtotal: 42.98,
  shipping: 5.0,
  total: 47.98,
};
