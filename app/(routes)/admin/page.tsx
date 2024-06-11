import Cards from "@/components/admin/cards";
import prismadb from "@/lib/prismadb";

const DashboardPage = async () => {
  const categories = await prismadb.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const products = await prismadb.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const orders = await prismadb.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      <div className="flex space-x-8 p-5 justify-center">
        <Cards categories={categories} products={products} orders={orders} />
      </div>
    </>
  );
};

export default DashboardPage;
