import { zodResolver } from "@hookform/resolvers/zod";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Icons } from "@/components/icons";
import { useCreateCategory } from "@/hooks/categories/useCreateCategory";
import { useFetchCategory } from "@/hooks/categories/useFetchCategory";
import { useUpdateCategory } from "@/hooks/categories/useUpdateCategory";

const formSchema = z.object({
  name: z.string().min(1, "Category name is required.").max(30, {
    message: "Category name must not be longer than 30 characters.",
  }),
  code: z.string().min(1, "Category code is required").max(30, {
    message: "Category code must not be longer than 30 characters.",
  }),
  description: z
    .string()
    .max(160)
    .min(4, { message: "Description must be at least 4 characters" }),
});

type FormProps = z.infer<typeof formSchema>;

const defaultValues: Partial<FormProps> = {
  name: "",
  code: "",
  description: "",
};

const CategoriesFormPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: category, isLoading } = useFetchCategory(id || "");
  const { mutate: create, isLoading: isCreating } = useCreateCategory();
  const { mutate: update, isLoading: isUpdating } = useUpdateCategory(id || "");

  const [searchParams] = useSearchParams();

  const form = useForm<FormProps>({
    resolver: zodResolver(formSchema),
    defaultValues,
    values: category,
    mode: "onChange",
  });

  const onSubmit = (data: FormProps) => {
    if (id) {
      update(data, {
        onSuccess: () => {
          toast.success("Successfully updated!");
          navigate(`/categories?${searchParams.toString()}`);
        },
        onError: () => {
          toast.error("Uh oh! Something went wrong.");
        },
      });
    } else {
      create(data, {
        onSuccess: () => {
          toast.success("Successfully created!");
          navigate(`/categories?${searchParams.toString()}`);
        },
        onError: () => {
          toast.error("Uh oh! Something went wrong.");
        },
      });
    }
  };

  const redirectToList = () => {
    navigate(`/categories?${searchParams.toString()}`);
  };

  const loading = isLoading || isCreating || isUpdating;

  return (
    <div
      className={`${
        loading ? "pointer-events-none opacity-70" : ""
      } rounded-[15px] bg-[#FCFCFC] p-[20px] lg:p-[40px]`}
    >
      <div className="mb-[25px] flex items-center space-x-[25px] border-b pb-4">
        <CaretLeftIcon
          className="h-[28px] w-[28px] cursor-pointer"
          onClick={redirectToList}
        />
        <h1 className="text-[22px] font-[600]">
          {id ? "Update" : "Create"} Category
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category name</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="Category name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category code</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="Category code"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about this category"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations to
                  link to them.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end space-x-[20px]">
            <Button
              disabled={loading}
              variant="outline"
              type="button"
              onClick={redirectToList}
            >
              Cancel
            </Button>
            <Button
              disabled={loading}
              type="submit"
              variant="secondary"
              className="w-[220px]"
            >
              {loading ? (
                <>
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />{" "}
                  Loading...
                </>
              ) : isCreating ? (
                "Submit"
              ) : (
                "Update"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CategoriesFormPage;
