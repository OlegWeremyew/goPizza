export type CartInitialType = {
  totalPrice: number;
  items: any[];
};

export type ItemCartType = {
  id: string | number;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  sizes: number;
  count: number;
};
