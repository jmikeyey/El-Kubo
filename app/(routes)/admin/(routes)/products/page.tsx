import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { ProductColumn } from "./components/columns";
import { formatter } from "@/lib/utils";
import { ProductClient } from "./components/client";

const ProductsPage = async () => {
  const products = await prismadb.product.findMany({
    include: {
      images: true,
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    isArchived: item.isArchived,
    price: formatter.format(item.price.toNumber()),
    image: item.images[0].url,
    category: item.category ? item.category.name : "",
    createdAt: format(item.createdAt, "MMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
