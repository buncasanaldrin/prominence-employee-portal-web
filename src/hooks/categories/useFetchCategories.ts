import { useQuery } from "react-query";

import { CategoriesParams } from "@/interfaces";
import { QueryKeys } from "@/constants";
import { fetchCategories } from "@/api";

export const useFetchCategories = ({
  search,
  page,
  limit,
  offset,
}: CategoriesParams) => {
  const params: CategoriesParams = { search, page: 1, limit: 0, offset: 0 };

  if (search) params.search = search;
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (offset) params.offset = offset;

  return useQuery([QueryKeys.Categories, params], () =>
    fetchCategories(params)
  );
};
