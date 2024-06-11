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
import { Orders } from "@/lib/Types";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
interface OrderDetailsProps {
  order: Orders | null;
  handleDecrease: (id: string) => void;
  handleIncrease: (id: string) => void;
  handleRemove: (id: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  order,
  handleDecrease,
  handleIncrease,
  handleRemove,
}) => {
  const [amountPaid, setAmountPaid] = useState<number>(0);
  const [change, setChange] = useState<number>(0);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  useEffect(() => {
    const calculateChange = () => {
      const changeAmount = amountPaid - (order?.total ?? 0);
      return changeAmount;
    };

    setChange(calculateChange());
  }, [amountPaid, order]);

  const handleCreateOrder = () => {
    setIsDialogOpen(true);
  };
  return (
    <div className="w-80">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Your Order</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {!order || order.products.length === 0 ? (
              <p>No orders</p>
            ) : (
              order.products.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={product.imgSrc ?? ""}
                      alt="Product Image"
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <div>
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-gray-500">
                        ₱{product.price}.00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDecrease(product.id!)}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                    <p>{product.quantity}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleIncrease(product.id!)}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemove(product.id!)}
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
          <p className="font-medium">₱{order?.total}.00</p>
        </CardFooter>
        <CardFooter>
          <div className="flex justify-between flex-col">
            <div className="flex items-center">
              <label className="font-medium mr-2">Amount Paid:</label>
              <Input
                type="number"
                value={amountPaid}
                onChange={(e) => setAmountPaid(parseInt(e.target.value))}
                disabled={!order || order.products.length === 0}
              />
            </div>

            <div className="mt-2">
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
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                className="w-full"
                onClick={handleCreateOrder}
                disabled={change < 0 || isDialogOpen || order === null}
              >
                {isDialogOpen ? "Viewing Order" : "Create Order"}
              </Button>
            </DialogTrigger>
            {/* DIALOG */}
            <DialogContent className="max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  Order Details <p>#{order?.orderId}</p>
                </DialogTitle>
                <DialogDescription>
                  Here are the details of your order:
                </DialogDescription>
              </DialogHeader>
              {order?.products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={product.imgSrc ?? "default.png"}
                      alt="Product Image"
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">
                        ₱{product.price}.00
                      </p>
                      <p className="text-sm text-gray-500">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <p className="font-medium">Total: ₱{order?.total}.00</p>
                <p className="font-medium">Amount Paid: ₱{amountPaid}.00</p>
                <p className="font-medium">Change: ₱{change}.00</p>
              </div>
              <DialogFooter>
                <Button
                  onClick={() => setIsDialogOpen(false)}
                  className="w-full"
                >
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
