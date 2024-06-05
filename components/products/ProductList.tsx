import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// ProductList component
const ProductList = ({ products, onClick }: any) => {
  return (
    <div className="flex-grow overflow-y-auto" style={{ maxHeight: "70vh" }}>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product: any, index: any) => (
          <button
            onClick={() => {
              onClick(product);
            }}
            className="w-full focus:outline-none"
            key={index}
          >
            <Card className="w-full">
              <CardContent>
                <Image
                  src={product.imgSrc}
                  alt="Product Image"
                  className="h-24 w-full"
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
