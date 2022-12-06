export interface IProduct {
  id?: string;
  product_code?: string;
  product_name: string;
  price?: number;
  currency?: string;
  discount?: number;
  dimension?: string;
  unit: string;
}

export interface ICartItem {
  product: IProduct;
  qty: number;
}

export interface ITransactionDetail {
  id?: string;
  document_code?: string;
  document_number?: string;
  product_code?: string;
  price?: number;
  quantity?: number;
  unit?: string;
  sub_total: number;
  currency: string;
  product_name?: string;
  discount?: number;
  dimension?: string;
}
