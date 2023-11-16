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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/datepicker";

const formSchema = z.object({
  name: z.string().min(1, "Member name is required.").max(30, {
    message: "Member name must not be longer than 30 characters.",
  }),
  dob: z.string().optional(),
  effective_date: z.string().optional(),
  term_date: z.string().optional(),
  hire_date: z.string().optional(),
  sponsor_id: z.string().optional(),
});

type FormProps = z.infer<typeof formSchema>;

const defaultValues: Partial<FormProps> = {
  name: "",
  dob: "",
  effective_date: "",
  term_date: "",
  hire_date: "",
  sponsor_id: "",
};

const MembersFormPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const form = useForm<FormProps>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = () => {
    toast.success("Successfully submitted!");
  };

  const redirectToList = () => {
    navigate(`/members?${searchParams.toString()}`);
  };

  return (
    <div className="rounded-[15px] bg-[#FCFCFC] p-[20px] lg:p-[40px]">
      <div className="mb-[25px] flex items-center space-x-[25px] border-b pb-4">
        <CaretLeftIcon
          className="h-[28px] w-[28px] cursor-pointer"
          onClick={redirectToList}
        />
        <h1 className="text-[22px] font-[600]">
          {id ? "Update" : "Create"} Member
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Member name</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="Member name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={() => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Date Of Birth</FormLabel>
                <FormControl>
                  <DatePicker />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="effective_date"
            render={() => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Effective Date</FormLabel>
                <FormControl>
                  <DatePicker />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="term_date"
            render={() => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Term Date</FormLabel>
                <FormControl>
                  <DatePicker />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hire_date"
            render={() => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Hire Date</FormLabel>
                <FormControl>
                  <DatePicker />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sponsor_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sponsor ID</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="Sponsor name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end space-x-[20px]">
            <Button variant="outline" type="button" onClick={redirectToList}>
              Cancel
            </Button>
            <Button type="submit" variant="secondary" className="w-[220px]">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MembersFormPage;
