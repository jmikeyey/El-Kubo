import { Layers3, Salad, NotebookPen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Category, Order, Product } from "@prisma/client";

interface CardsProps {
  categories: Category[];
  products: Product[];
  orders: Order[];
}

const Cards: React.FC<CardsProps> = ({ categories, products, orders }) => {
  return (
    <div className="flex space-x-4">
      <Card className="w-[250px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Categories</CardTitle>
          <Layers3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{categories.length}</div>
          <p className="text-xs text-muted-foreground">total categories</p>
        </CardContent>
      </Card>
      <Card className="w-[250px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Products</CardTitle>
          <Salad className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{products.length}</div>
          <p className="text-xs text-muted-foreground">total products</p>
        </CardContent>
      </Card>
      <Card className="w-[250px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Orders</CardTitle>
          <NotebookPen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{orders.length}</div>
          <p className="text-xs text-muted-foreground">total orders</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
