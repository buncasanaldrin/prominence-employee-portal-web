import { Pencil2Icon, PlusIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useDeleteCategory } from "@/hooks/categories/useDeleteCategory";
import { useFetchCategories } from "@/hooks/categories/useFetchCategories";
import { Category } from "@/interfaces";

import AlertDestructive from "@/components/alerts/AlertDestructive";
import Pagination from "@/components/table/Pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CategoriesListPage: React.FC = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({ page: 0, search: "" });

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const page = parseInt(`${searchParams.get("page")}`) || 1;
  const limit = 5;
  const offset = limit * page - limit;

  const { data: categories, isLoading } = useFetchCategories({
    search: searchParams.get("search") || "",
    page,
    limit,
    offset,
  });

  const { mutate: deleteCategory, isLoading: isDeleting } = useDeleteCategory();

  const handleDeleteCategory = (id: Category["_id"]) => {
    deleteCategory(id, {
      onSuccess: () => {
        toast.success("Successfully deleted!");
      },
      onError: () => {
        toast.error("Uh oh! Something went wrong.");
      },
      onSettled: () => {
        setSearchParams({ search, page: "1" });
      },
    });
  };

  const filter = () => {
    setSearchParams({ search, page: "1" });
  };

  const redirectToForm = () => {
    navigate(`/categories/create?${searchParams.toString()}`);
  };

  const redirectToEditForm = (id: string) => {
    navigate(`/categories/${id}?${searchParams.toString()}`);
  };

  useEffect(() => {
    const { search, page } = filters;

    if (page) {
      setSearchParams({ search, page: `${page}` });
    }
  }, [filters]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Category List</h2>
        <Button
          disabled={isLoading || isDeleting}
          onClick={redirectToForm}
          variant="secondary"
          className="w-[180px]"
        >
          <PlusIcon className="h-5 w-5" />
          &nbsp;Add Category
        </Button>
      </div>
      <div
        className={`${
          isLoading || isDeleting ? "pointer-events-none opacity-70" : ""
        } mt-[20px] rounded-[15px] bg-[#FCFCFC] p-[10px] sm:p-[20px] lg:p-[40px]`}
      >
        <div className="mb-[40px] flex items-center space-x-[20px]">
          <Input
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && filter()}
            placeholder="Search for categories..."
            className="max-w-[300px]"
          />
          <Button className="w-[200px]" onClick={filter}>
            Filter
          </Button>
        </div>

        <div className="flex min-h-[430px] flex-col justify-between">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories?.data?.map((category) => (
                <TableRow key={category._id}>
                  <TableCell>{category._id}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.code}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        onClick={() => redirectToEditForm(category._id)}
                      >
                        <Pencil2Icon />
                      </Button>
                      <AlertDestructive
                        onClick={() => handleDeleteCategory(category._id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            currentPage={page}
            totalItems={categories?.total_count || 0}
            onPageChange={(newPage) => setFilters({ search, page: newPage })}
          />
        </div>
      </div>
    </>
  );
};

export default CategoriesListPage;
