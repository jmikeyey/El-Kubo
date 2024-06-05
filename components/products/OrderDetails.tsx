"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
// OrderDetails component

import { Item } from "@/lib/Types";
import { Input } from "../ui/input";

const OrderDetails = ({
  orders,
  total,
  handleDecrease,
  handleIncrease,
  handleRemove,
}: any) => {
  const [amountPaid, setAmountPaid] = useState<number>(0);
  const [change, setChange] = useState<number>(0);
  useEffect(() => {
    const calculateChange = () => {
      const change = amountPaid - total;
      return change;
    };

    setChange(calculateChange());
  }, [amountPaid, total]);

  const handleCreateOrder = () => {
    // onCreateOrder(selectedItems);
  };

  return (
    <div className="w-96 flex-shrink-0">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Your Order</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.length === 0 ? (
              <p>No orders</p>
            ) : (
              orders.map((order: any, index: number) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={order.imgSrc}
                      alt="Product Image"
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <div>
                      <p className="font-medium">{order.name}</p>
                      <p className="text-sm text-gray-500">₱{order.price}.00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDecrease(order.id)}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                    <p>{order.quantity}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleIncrease(order.id)}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemove(order.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <p className="font-medium">Total</p>
          <p className="font-medium">₱{total}.00</p>
        </CardFooter>
        <CardFooter>
          <div className="flex justify-between flex-col">
            <div className="flex items-center">
              <label className="font-medium mr-2">Amount Paid:</label>
              <Input
                type="number"
                value={amountPaid}
                onChange={(e) => setAmountPaid(parseInt(e.target.value))}
                disabled={orders.length === 0}
              />
            </div>

            <div className="mt-2 ">
              <p className="font-medium">Change:</p>
              <p
                className={`font-medium ${
                  change < 0
                    ? "text-red-500"
                    : change > 0
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                ₱{change}.00
              </p>
            </div>
          </div>
        </CardFooter>
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleCreateOrder}
            disabled={change < 0}
          >
            Create Order
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderDetails;

function MinusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}
function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2" />
      <path d="M19 6l-1 14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  );
}
function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
