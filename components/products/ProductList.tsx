import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// ProductList component
const ProductList = ({ products, onClick }: any) => {
  return (
    <div className="flex-grow overflow-y-auto" style={{ maxHeight: "70vh" }}>
      <div className="grid lg:grid-cols-5 lg:gap-4 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2 gap-2">
        {products.map((product: any, index: any) => (
          <button
            onClick={() => {
              onClick(product);
            }}
            className="w-full focus:outline-none"
            key={index}
          >
            <Card className="w-full h-48 flex flex-col justify-between">
              <CardContent className="flex flex-col items-center justify-between h-full">
                <Image
                  src={product.imgSrc}
                  alt="Product Image"
                  className="h-24 w-full object-contain"
                  width={86}
                  height={86}
                />
                <div className="text-center">
                  <p className="text-xs">{product.name}</p>
                  <p className="text-sm">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
