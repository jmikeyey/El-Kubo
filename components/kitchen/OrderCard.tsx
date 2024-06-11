import { Orders, ProductInOrder } from "@/lib/Types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import Timer from "./Timer";
interface OrderCardProps {
  order: Orders;
  onStatusChange: (
    id: number,
    newStatus: "On Queue" | "Preparing" | "To Serve" | "Done"
  ) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, onStatusChange }) => {
  const handleStatusChange = async () => {
    let status: any;
    console.log(order.orderNumber);
    if (order.status === "On Queue") {
      status = "Preparing";
    } else if (order.status === "Preparing") {
      status = "To Serve";
    } else if (order.status === "To Serve") {
      status = "Done";
    }

    try {
      const response = await axios.put(
        `/api/orders/${order.orderNumber}/${status}`
      );
      console.log(response.data);

      // Update the status if the request was successful
      if (response.status === 200) {
        onStatusChange(order.orderId, status);
        toast.success(`Order is now ${status}`);
      }
    } catch (error) {
      toast.error("Failed to update order status");
    }
  };

  return (
    <div
      className="border p-4 mb-4 bg-white rounded-lg shadow-sm"
      style={{ borderRadius: "16px" }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold">Order #{order.orderId}</h3>
        <div className="flex flex-col">
          <p className="text-sm mb-2">Status: {order.status}</p>
          <Timer time={order.createdAt} />
        </div>
        {order.status !== "To Serve" && (
          <Button onClick={handleStatusChange}>Next Status</Button>
        )}
        {order.status === "To Serve" && (
          <Button size="sm" variant="destructive" onClick={handleStatusChange}>
            Served
          </Button>
        )}
      </div>
      <div>
        {order.products.map((product: ProductInOrder) => (
          <div key={product.id} className="flex items-center mb-2">
            <Image
              src={product.imgSrc ?? ""}
              alt={product.name ?? "Product Image"}
              width={50}
              height={50}
              className="rounded"
            />
            <div className="ml-4 flex-grow">
              <h4 className="text-md font-semibold">{product.name}</h4>
              <p className="text-sm">Quantity: {product.quantity}</p>
              {/* <p className="text-sm">
                Price: ₱{product.price ? product.price.toFixed(2) : "N/A"}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
