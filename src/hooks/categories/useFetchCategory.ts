import { useQuery } from "react-query";

import { Category } from "@/interfaces";
import { QueryKeys } from "@/constants";
import { fetchCategoryById } from "@/api/categories";

export const useFetchCategory = (id: Category["_id"]) => {
  return useQuery([QueryKeys.Category, id], () => fetchCategoryById(id), {
    enabled: !!id, // Only run the query if `id` exists
  });
};
