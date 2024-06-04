export interface Orders {
  items: OrdersDetails[];
  subtotal: number;
  shipping: number;
  total: number;
}

export interface OrdersDetails {
  image: string;
  name: string;
  quantity: number;
  price: number;
}
