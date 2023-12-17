export type Product = {
  filter(arg0: (itemsId: any) => boolean): void;
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  quantity?: number;
};
