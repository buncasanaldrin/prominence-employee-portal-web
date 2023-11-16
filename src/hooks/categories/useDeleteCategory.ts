import { useMutation, useQueryClient } from "react-query";

import { deleteCategory } from "@/api";
import { QueryKeys } from "@/constants";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.resetQueries(QueryKeys.Categories);
    },
  });
};
