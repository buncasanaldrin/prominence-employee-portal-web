import axios from "axios";

import { Category, CategoriesParams, CategoriesPayload } from "@/interfaces";
import { API_BASE_URL } from "@/constants";

const url = `${API_BASE_URL}/api/v1/categories`;

export const fetchCategories = async (
  params?: CategoriesParams
): Promise<CategoriesPayload> => {
  const { data } = await axios.get<CategoriesPayload>(url, {
    params,
  });

  return data;
};

export const fetchCategoryById = async (
  id: Category["_id"]
): Promise<Category> => {
  console.log(`${url}/${id}`);
  const { data } = await axios.get<Category>(`${url}/${id}`);

  return data;
};

export const createCategory = async (
  newCategory: Omit<Category, "_id">
): Promise<Category> => {
  const { data } = await axios.post<Category>(url, newCategory);

  return data;
};

export const updateCategory = async (
  updatedCategory: Omit<Category, "_id">,
  categoryId: Category["_id"]
): Promise<Category> => {
  const { data } = await axios.put<Category>(
    `${url}/${categoryId}`,
    updatedCategory
  );

  return data;
};

export const deleteCategory = async (
  id: Category["_id"]
): Promise<Category> => {
  const { data } = await axios.delete<Category>(`${url}/${id}`);

  return data;
};
