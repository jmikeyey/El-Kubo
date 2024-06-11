import Page from "@/components/user/Page";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

export default async function Home() {
  // if (!checkRole("user")) {
  //   redirect("/");
  // }
  const categories = await prismadb.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const products = await prismadb.product.findMany({
    include: {
      images: true,
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const transformedProducts = products.map((product, index) => ({
    id: product.id,
    name: product.name,
    price: Number(product.price),
    imgSrc: product.images[0]?.url || "/placeholder.svg",
    category: product.category.name,
  }));
  const categoryNames = categories.map((category) => category.name);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Page category={categoryNames} products={transformedProducts} />
    </main>
  );
}
