"use client";
import React, { useState } from "react";
import { Orders } from "@/lib/Types";
import OrderCard from "@/components/kitchen/OrderCard";

const KitchenStatus = (props: any) => {
  const { ordersData } = props;
  console.log(ordersData);
  const [orders, setOrders] = useState<Orders[]>(ordersData);

  const handleStatusChange = (
    orderId: number,
    newStatus: "On Queue" | "Preparing" | "To Serve" | "Done"
  ) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const renderOrders = (
    status: "On Queue" | "Preparing" | "To Serve" | "Done"
  ) => {
    return orders
      .filter((order) => order.status === status)
      .map((order) => (
        <OrderCard
          key={order.orderId}
          order={order}
          onStatusChange={handleStatusChange}
        />
      ));
  };

  return (
    <>
      <div className="flex flex-grow space-x-4 p-4">
        <div className="w-1/3 p-4 border border-gray-300 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">On Queue</h2>
          {renderOrders("On Queue")}
        </div>
        <div className="w-1/3 p-4 border border-gray-300 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Preparing</h2>
          {renderOrders("Preparing")}
        </div>
        <div className="w-1/3 p-4 border border-gray-300 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">To Serve</h2>
          {renderOrders("To Serve")}
        </div>
      </div>
    </>
  );
};

export default KitchenStatus;

const initialOrders: Orders[] = [
  {
    orderId: 1,
    status: "On Queue",
    products: [
      {
        id: "1",
        name: "Latte",
        price: 120.0,
        imgSrc: "/latte.svg",
        category: "beverage",
        quantity: 1,
      },
      {
        id: "2",
        name: "Croissant",
        price: 50.0,
        imgSrc: "/croissant.svg",
        category: "pastries",
        quantity: 2,
      },
    ],
    total: 220.0, // Total for the first order
  },
  {
    orderId: 2,
    status: "Preparing",
    products: [
      {
        id: "3",
        name: "Espresso",
        price: 100.0,
        imgSrc: "/espresso.svg",
        category: "beverage",
        quantity: 1,
      },
    ],
    total: 100.0, // Total for the second order
  },
  // Add more sample orders here if needed
];
