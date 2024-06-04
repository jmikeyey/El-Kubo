"use client"
import Products from "@/components/products/Products";
import Order from "./products/Order";
import { useState } from "react";

export default function Component() {
  const [orders, setOrders] = useState([])
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0">
      <Products />
      <Order />
    </div>
  );
}
