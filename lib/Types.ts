export interface Items {
  items: Item[];
}

export interface Item {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  category: "beverage" | "coffee" | "pastries";
}
export interface ProductInOrder extends Partial<Item> {
  quantity: number;
}

export interface Orders {
  orderId: number;
  status: "On Queue" | "Preparing" | "To Serve" | "Done";
  products: ProductInOrder[];
  total: number;
}
