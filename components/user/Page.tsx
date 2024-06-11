"use client";

import { useState } from "react";
import CategoryMenu from "@/components/products/CategoryMenu";
import ProductList from "@/components/products/ProductList";
import OrderDetails from "@/components/products/OrderDetails";
import { Item, Orders, ProductInOrder } from "@/lib/Types";

interface Props {
  category: string[];
  products: Item[];
}

export default function Home(props: Props) {
  const { category, products } = props;

  const [order, setOrder] = useState<Orders | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(category[0]);
  const categories = category;

  const handleIncrease = (id: string) => {
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

  const handleDecrease = (id: string) => {
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

  const handleRemove = (id: string) => {
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
  const resetOrder = () => {
    setOrder(null);
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
              resetOrder={resetOrder}
            />
          </div>
        </div>
      </div>
    </>
  );
}
