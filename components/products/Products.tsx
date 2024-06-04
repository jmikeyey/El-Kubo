import React from "react";
import ProductCard from "./ProductsCard";
import Link from "next/link";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;

export const products = [
  {
    name: "Cozy Blanket",
    price: 29.99,
    image: "/placeholder.svg",
  },
  {
    name: "Autumn Mug",
    price: 12.99,
    image: "/placeholder.svg",
  },
  {
    name: "Fall Fragrance Candle",
    price: 16.99,
    image: "/placeholder.svg",
  },
  {
    name: "Autumn Leaves Wall Art",
    price: 39.99,
    image: "/placeholder.svg",
  },
  {
    name: "Fall Harvest Wreath",
    price: 49.99,
    image: "/placeholder.svg",
  },
  {
    name: "Spiced Apple Cider Syrup",
    price: 12.99,
    image: "/placeholder.svg",
  },
];
