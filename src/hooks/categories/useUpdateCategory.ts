import { useMutation, useQueryClient } from "react-query";

import { updateCategory } from "@/api";
import { Category } from "@/interfaces";
import { QueryKeys } from "@/constants";

export const useUpdateCategory = (categoryId: Category["_id"]) => {
  const queryClient = useQueryClient();

  return useMutation(
    (updatedCategory: Omit<Category, "_id">) =>
      updateCategory(updatedCategory, categoryId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.Categories);
      },
    }
  );
};
