"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8an0SxDIQNY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import OrderDetails from "./products/OrderDetails";
import { Item, Orders } from "@/lib/Types";
import { useState } from "react";
import CategoryMenu from "./products/CategoryMenu";
import ProductList from "./products/ProductList";
import Image from "next/image";

export default function Component() {
  const [orders, setOrders] = useState<Orders[]>([]);
  const [activeCategory, setActiveCategory] = useState("beverage");
  const categories = ["beverage", "pastries", "coffee"];

  const handleIncrease = (id: number) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, quantity: order.quantity + 1 } : order
      )
    );
  };

  const handleDecrease = (id: number) => {
    setOrders(
      orders.map((order) =>
        order.id === id && order.quantity > 1
          ? { ...order, quantity: order.quantity - 1 }
          : order
      )
    );
  };

  const handleRemove = (id: number) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const total = orders.reduce(
    (sum, order) => sum + (order.price ?? 0) * order.quantity,
    0
  );

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const addOrder = (product: any) => {
    console.log(product);
    const existingOrder = orders.find((order) => order.id === product.id);
    if (existingOrder) {
      setOrders(
        orders.map((order) =>
          order.id === product.id
            ? { ...order, quantity: order.quantity + 1 }
            : order
        )
      );
    } else {
      setOrders([
        ...orders,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          imgSrc: product.imgSrc,
        },
      ]);
    }
  };
  return (
    <main className="flex flex-col space-y-4 shadow-md p-10">
      <div>
        <Image
          src="/5954169.jpg"
          alt="Promo Image"
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </div>
      <CategoryMenu
        categories={categories}
        activeCategory={activeCategory}
        onClick={handleCategoryClick}
      />
      <div className="flex space-x-4">
        <ProductList
          products={products.filter(
            (product) => product.category === activeCategory
          )}
          onClick={addOrder}
        />
        {/* ORDER DETAILS */}
        <OrderDetails
          orders={orders}
          total={total}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleRemove={handleRemove}
        />
      </div>
    </main>
  );
}

const products: Item[] = [
  {
    id: 1,
    name: "Caramel Macchiato",
    price: 150.0,
    imgSrc: "/placeholder.svg",
    category: "beverage",
  },
  {
    id: 2,
    name: "Maple Cinnamon",
    price: 160.0,
    imgSrc: "/placeholder.svg",
    category: "beverage",
  },
  {
    id: 3,
    name: "Chocolate Frappe",
    price: 140.0,
    imgSrc: "/placeholder.svg",
    category: "beverage",
  },
  {
    id: 4,
    name: "Vanilla Coffee",
    price: 120.0,
    imgSrc: "/placeholder.svg",
    category: "beverage",
  },
  {
    id: 5,
    name: "Caramel Frappe",
    price: 130.0,
    imgSrc: "/placeholder.svg",
    category: "beverage",
  },
  {
    id: 6,
    name: "Cookie Crumble",
    price: 140.0,
    imgSrc: "/placeholder.svg",
    category: "beverage",
  },
  {
    id: 7,
    name: "Iced Shaken Espresso",
    price: 100.0,
    imgSrc: "/placeholder.svg",
    category: "beverage",
  },
  {
    id: 8,
    name: "Golden Foam Latte",
    price: 110.0,
    imgSrc: "/placeholder.svg",
    category: "beverage",
  },
  {
    id: 9,
    name: "Classic Brew",
    price: 100.0,
    imgSrc: "/placeholder.svg",
    category: "beverage",
  },
  {
    id: 10,
    name: "Cafe Latte",
    price: 120.0,
    imgSrc: "/placeholder.svg",
    category: "beverage",
  },
  {
    id: 11,
    name: "Croissant",
    price: 50.0,
    imgSrc: "/croissant.svg",
    category: "pastries",
  },
  {
    id: 12,
    name: "Blueberry Muffin",
    price: 60.0,
    imgSrc: "/blueberry_muffin.svg",
    category: "pastries",
  },
  {
    id: 13,
    name: "Cinnamon Roll",
    price: 70.0,
    imgSrc: "/cinnamon_roll.svg",
    category: "pastries",
  },
  {
    id: 14,
    name: "Bagel",
    price: 55.0,
    imgSrc: "/bagel.svg",
    category: "pastries",
  },
  {
    id: 15,
    name: "Plain Donut",
    price: 40.0,
    imgSrc: "/plain_donut.svg",
    category: "pastries",
  },
  {
    id: 16,
    name: "Chocolate Chip Cookie",
    price: 45.0,
    imgSrc: "/chocolate_chip_cookie.svg",
    category: "pastries",
  },
  {
    id: 17,
    name: "Black Coffee",
    price: 80.0,
    imgSrc: "/black_coffee.svg",
    category: "coffee",
  },
  {
    id: 18,
    name: "Espresso",
    price: 90.0,
    imgSrc: "/espresso.svg",
    category: "coffee",
  },
  {
    id: 19,
    name: "Latte",
    price: 100.0,
    imgSrc: "/latte.svg",
    category: "coffee",
  },
  {
    id: 20,
    name: "Cappuccino",
    price: 110.0,
    imgSrc: "/cappuccino.svg",
    category: "coffee",
  },
  {
    id: 21,
    name: "Mocha",
    price: 120.0,
    imgSrc: "/mocha.svg",
    category: "coffee",
  },
  {
    id: 22,
    name: "Iced Coffee",
    price: 90.0,
    imgSrc: "/iced_coffee.svg",
    category: "coffee",
  },
  {
    id: 23,
    name: "Cold Brew",
    price: 100.0,
    imgSrc: "/cold_brew.svg",
    category: "coffee",
  },
];
