import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function PUT(
  req: Request,
  { params }: { params: { orderId: string; status: string } }
) {
  try {
    const { orderId, status } = params;

    const updatedOrder = await prismadb.order.update({
      where: { id: orderId },
      data: { status: status },
    });

    return NextResponse.json({ success: true, updatedOrder });
  } catch (error) {
    console.log("[ORDERS_PUT]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
