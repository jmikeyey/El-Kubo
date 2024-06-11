"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumn = {
  id: string;
  orderNumber: number;
  total: string;
  status: string;
  createdAt: string;
  time: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "orderNumber",
    header: "Order No.",
    cell: ({ row }) => <span># {row.original.orderNumber}</span>,
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
];
