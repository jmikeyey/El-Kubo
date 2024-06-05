import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
                <img
                  src={product.imgSrc}
                  alt="Product Image"
                  className="h-24 w-full"
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
