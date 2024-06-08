"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { checkRole } from "@/utils/roles";
import CategoryMenu from "@/components/products/CategoryMenu";
import ProductList from "@/components/products/ProductList";
import OrderDetails from "@/components/products/OrderDetails";
import { Item, Orders, ProductInOrder } from "@/lib/Types";

export default function Home() {
  if (!checkRole("user")) {
    redirect("/");
  }

  const [order, setOrder] = useState<Orders | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("beverage");

  const categories = ["beverage", "pastries", "coffee"];

  const handleIncrease = (id: number) => {
    if (order) {
      const updatedProducts = order.products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity! + 1 }
          : product
      );
      const newTotal = updatedProducts.reduce(
        (sum, product) => sum + product.price! * product.quantity!,
        0
      );
      setOrder({ ...order, products: updatedProducts, total: newTotal });
    }
  };

  const handleDecrease = (id: number) => {
    if (order) {
      const updatedProducts = order.products.map((product) =>
        product.id === id && product.quantity! > 1
          ? { ...product, quantity: product.quantity! - 1 }
          : product
      );
      const newTotal = updatedProducts.reduce(
        (sum, product) => sum + product.price! * product.quantity!,
        0
      );
      setOrder({ ...order, products: updatedProducts, total: newTotal });
    }
  };

  const handleRemove = (id: number) => {
    if (order) {
      const updatedProducts = order.products.filter(
        (product) => product.id !== id
      );
      const newTotal = updatedProducts.reduce(
        (sum, product) => sum + product.price! * product.quantity!,
        0
      );
      setOrder({ ...order, products: updatedProducts, total: newTotal });
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const addOrder = (product: Item) => {
    if (order) {
      const existingProductIndex = order.products.findIndex(
        (p) => p.id === product.id
      );

      let updatedProducts: ProductInOrder[];

      if (existingProductIndex !== -1) {
        // Product already in the order, increase quantity
        updatedProducts = order.products.map((p, idx) =>
          idx === existingProductIndex
            ? { ...p, quantity: (p.quantity || 0) + 1 }
            : p
        );
      } else {
        // Product not in the order, add to the order
        updatedProducts = [...order.products, { ...product, quantity: 1 }];
      }

      // Calculate new total
      const newTotal = updatedProducts.reduce(
        (sum, p) => sum + (p.price || 0) * (p.quantity || 0),
        0
      );

      // Update the order
      setOrder({ ...order, products: updatedProducts, total: newTotal });
    } else {
      // No existing order, create a new one
      const newOrder: Orders = {
        orderId: 1, // You can adjust this logic for generating orderId
        status: "On Queue",
        products: [{ ...product, quantity: 1 }],
        total: product.price || 0,
      };

      setOrder(newOrder);
    }
  };
  return (
    <>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <div className="flex flex-col space-y-4 shadow-md p-8 w-full max-w-6xl">
        <CategoryMenu
          categories={categories}
          activeCategory={activeCategory}
          onClick={handleCategoryClick}
        />
        <div className="flex flex-col lg:flex-row lg:space-x-4 sm:space-y-4">
          <div className="sm:mb-4 lg:mb-0">
            <ProductList
              products={products.filter(
                (product) => product.category === activeCategory
              )}
              onClick={addOrder}
            />
          </div>
          {/* ORDER DETAILS */}
          <div className="flex-grow">
            <OrderDetails
              order={order}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              handleRemove={handleRemove}
            />
          </div>
        </div>
      </div>
    </>
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
