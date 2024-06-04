// components/OrderDetailCard.js
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { OrdersDetails, Orders } from "@/lib/Types";
interface Props {
  order: Orders;
}
const OrderDetailCard = (props: Props) => {
  const { order } = props;

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-2xl font-bold">Order Details</h2>
      <div className="space-y-4">
        {order.items.map((item: any, index: any) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Quantity: {item.quantity}
                </span>
              </div>
            </div>
            <span className="text-gray-500 dark:text-gray-400 font-medium">
              ${item.price}
            </span>
          </div>
        ))}
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <span className="text-gray-500 dark:text-gray-400 font-medium">
          Subtotal
        </span>
        <span className="text-gray-500 dark:text-gray-400 font-medium">
          ${order.subtotal.toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-500 dark:text-gray-400 font-medium">
          Shipping
        </span>
        <span className="text-gray-500 dark:text-gray-400 font-medium">
          ${order.shipping.toFixed(2)}
        </span>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">Total</span>
        <span className="text-lg font-bold">${order.total.toFixed(2)}</span>
      </div>
      <Button className="w-full">Proceed to Checkout</Button>
    </div>
  );
};

export default OrderDetailCard;
