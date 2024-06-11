export interface Items {
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  price: number;
  imgSrc: string;
  category: string;
}
export interface ProductInOrder extends Partial<Item> {
  quantity: number;
}

export interface Orders {
  orderNumber?: number;
  orderId: number;
  status: "On Queue" | "Preparing" | "To Serve" | "Done";
  products: ProductInOrder[];
  total: number;
}
