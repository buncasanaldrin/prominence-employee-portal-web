export interface Login {
  username: string;
  password: string;
}

export interface Product {
  _id: string;
  categoryId: number;
  categoryName: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface Category {
  _id: string;
  code: string;
  name: string;
  description: string;
}

export interface CategoriesParams {
  search?: string;
  page: number;
  limit?: number;
  offset?: number;
}

export interface CategoriesPayload {
  data: Category[];
  total_count: number;
}
