"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Image from "next/image";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  category: string;
  isArchived: boolean;
  createdAt: string;
  image: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    id: "image",
    cell: ({ row }) => (
      <div className="w-10 h-10 relative flex justify-center items-center">
        {row.original.image && (
          <Image
            src={row.original.image}
            alt="Product Image"
            className="rounded-md"
            fill
            style={{
              objectFit: "cover", // cover, contain, none
            }}
            sizes="(min-width: 808px) 50vw, 100vw"
          />
        )}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "isArchived",
    header: "Archived",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
