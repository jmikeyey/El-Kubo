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
