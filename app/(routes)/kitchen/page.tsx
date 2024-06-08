import React from "react";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import KitchenStatus from "@/components/kitchen/KitchenStatus";

const KitchenPage = () => {
  if (!checkRole("kitchen")) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex justify-between items-center p-4 text-black border-b border-gray-300">
        <h1 className="text-xl font-bold">Kitchen Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="flex flex-grow">
        <KitchenStatus />
      </div>
    </div>
  );
};

export default KitchenPage;
