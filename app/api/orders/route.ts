import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { format } from "date-fns";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { products, status, total } = body;

    // Get the current date in YYYY-MM-DD format
    const currentDate = format(new Date(), "yyyy-MM-dd");

    // Find the maximum order number for today
    const maxOrder = await prismadb.order.findMany({
      where: {
        createdAt: {
          gte: new Date(currentDate + "T00:00:00.000Z"),
          lt: new Date(currentDate + "T23:59:59.999Z"),
        },
      },
      orderBy: {
        orderNumber: "desc",
      },
      select: {
        orderNumber: true,
      },
      take: 1,
    });

    // Determine the new order number
    let newOrderNumber = 1;
    if (maxOrder.length > 0) {
      newOrderNumber = parseInt(maxOrder[0].orderNumber) + 1;
    }

    // Create the order
    const newOrder = await prismadb.order.create({
      data: {
        orderNumber: newOrderNumber,
        status,
        total,
      },
    });

    // Create the order items
    const orderItems = products.map((product: any) => ({
      orderId: newOrder.id,
      productId: product.id,
      quantity: product.quantity,
    }));

    await prismadb.orderItem.createMany({
      data: orderItems,
    });

    return NextResponse.json({ orderId: newOrder.orderNumber });
  } catch (error) {
    console.log("[ORDERS_POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const orders = await prismadb.order.findMany({
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.log("[ORDERS_GET]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
