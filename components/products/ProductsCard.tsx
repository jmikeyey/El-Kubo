"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ProductCard = ({ product }: any) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    console.log(1);
    setQuantity(quantity - 1);
  };
  const addToCart = () => {
    
  }
  console.log(quantity);
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400 font-medium">
            {product.price}
          </span>
          <div className="flex items-center gap-2">
            <Button
              className="cursor-pointer"
              variant="outline"
              size="icon"
              onClick={handleDecrement}
              disabled={quantity <= 0}
            >
              <MinusIcon className="w-4 h-4" />
            </Button>
            <span>{quantity}</span>
            <Button
              className="cursor-pointer"
              variant="outline"
              size="icon"
              onClick={handleIncrement}
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <Button className="w-full" onClick={addToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};

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

export default ProductCard;
