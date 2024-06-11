import prismadb from "@/lib/prismadb";
import { OrderClient } from "./components/client";
import { OrderColumn } from "./components/columns";
import { format } from "date-fns";
import { formatter } from "@/lib/utils";

const OrdersPage = async () => {
  const orders = await prismadb.order.findMany({
    include: {
      orderItems: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    orderNumber: item.orderNumber,
    total: formatter.format(item.total.toNumber()),
    status: item.status,
    createdAt: format(item.createdAt, "MMM do, yyyy"),
    time: format(item.createdAt, "h:mm a"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
