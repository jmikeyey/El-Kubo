import React from "react";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import KitchenStatus from "@/components/kitchen/KitchenStatus";
import prismadb from "@/lib/prismadb";
import { Orders, ProductInOrder } from "@/lib/Types";
const KitchenPage = async () => {
  if (!checkRole("kitchen")) {
    redirect("/");
  }
  // getting orders
  const orders = await prismadb.order.findMany({
    include: {
      orderItems: {
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  });
  // Transform function
  const transformOrders = (orders: any[]): Orders[] => {
    return orders.map((order) => {
      const products: ProductInOrder[] = order.orderItems.map((item: any) => {
        const product = item.product;
        const imgSrc = product.images.length > 0 ? product.images[0].url : "";
        return {
          id: product.id,
          name: product.name,
          price: parseFloat(product.price),
          imgSrc: imgSrc,
          category: product.categoryId,
          quantity: item.quantity,
        };
      });
      return {
        orderNumber: order.id,
        orderId: order.orderNumber,
        status: order.status as Orders["status"],
        products,
        total: parseFloat(order.total),
      };
    });
  };
  console;
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex justify-between items-center p-4 text-black border-b border-gray-300">
        <h1 className="text-xl font-bold">Kitchen Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="flex flex-grow">
        <KitchenStatus ordersData={transformOrders(orders)} />
      </div>
    </div>
  );
};

export default KitchenPage;
