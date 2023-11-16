import { useMutation, useQueryClient } from "react-query";

import { createCategory } from "@/api";
import { Category } from "@/interfaces";
import { QueryKeys } from "@/constants";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (newCategory: Omit<Category, "_id">) => createCategory(newCategory),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.Categories);
      },
    }
  );
};
