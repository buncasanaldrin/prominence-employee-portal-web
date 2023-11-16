import { Pencil2Icon, PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import AlertDestructive from "@/components/alerts/AlertDestructive";
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

const MembersListPage: React.FC = () => {
  const members = [
    {
      member_id: 1,
      member_name: "Aldrin Buncasan",
      dob: "09/07/1993",
      effective_date: "09/12/2025",
      team_date: "10/11/2025",
      hire_date: "11/11/2025",
      sponsor_id: "GRP00232",
    },
    {
      member_id: 2,
      member_name: "Aimon Bio",
      dob: "10/10/1988",
      effective_date: "09/12/2028",
      team_date: "10/11/2027",
      hire_date: "11/11/2022",
      sponsor_id: "GRP00111",
    },
    {
      member_id: 3,
      member_name: "Jarvi Lee",
      dob: "11/11/1973",
      effective_date: "09/12/2027",
      team_date: "10/11/2026",
      hire_date: "11/11/2021",
      sponsor_id: "GRP000000",
    },
    {
      member_id: 4,
      member_name: "Ivan Mekus",
      dob: "12/12/1990",
      effective_date: "09/12/2028",
      team_date: "10/11/2024",
      hire_date: "11/11/2020",
      sponsor_id: "GRP000619",
    },
    {
      member_id: 5,
      member_name: "Erwin Sin",
      dob: "02/08/1986",
      effective_date: "09/12/2030",
      team_date: "10/11/2023",
      hire_date: "11/11/2021",
      sponsor_id: "GRP000299",
    },
    {
      member_id: 6,
      member_name: "Adrew Hamili",
      dob: "05/07/1997",
      effective_date: "09/12/2030",
      team_date: "10/11/2023",
      hire_date: "11/11/2021",
      sponsor_id: "GRP000299",
    },
  ];

  const navigate = useNavigate();

  const handleDeleteMember = () => {
    toast.error("Not available yet");
  };

  const redirectToForm = () => {
    navigate(`/members/create`);
  };

  const redirectToEditForm = (id: string) => {
    navigate(`/members/${id}`);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Member List</h2>
        <Button
          onClick={redirectToForm}
          variant="secondary"
          className="w-[180px]"
        >
          <PlusIcon className="h-5 w-5" />
          &nbsp;Add Member
        </Button>
      </div>
      <div className="mt-[20px] rounded-[15px] bg-[#FCFCFC] p-[10px] sm:p-[20px] lg:p-[40px]">
        <div className="mb-[40px] flex items-center space-x-[20px]">
          <Input
            autoComplete="off"
            placeholder="Search for members..."
            className="max-w-[300px]"
          />
          <Button className="w-[200px]">Filter</Button>
        </div>

        <div className="flex min-h-[430px] flex-col justify-between">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member ID</TableHead>
                <TableHead>Member Name</TableHead>
                <TableHead>Date Of Birth</TableHead>
                <TableHead>Effective Date</TableHead>
                <TableHead>Team Date</TableHead>
                <TableHead>Hire Date</TableHead>
                <TableHead>Sponsor ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((category) => (
                <TableRow key={category.member_id}>
                  <TableCell>{category.member_id}</TableCell>
                  <TableCell>{category.member_name}</TableCell>
                  <TableCell>{category.dob}</TableCell>
                  <TableCell>{category.effective_date}</TableCell>
                  <TableCell>{category.team_date}</TableCell>
                  <TableCell>{category.hire_date}</TableCell>
                  <TableCell>{category.sponsor_id}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        onClick={() =>
                          redirectToEditForm(`${category.member_id}`)
                        }
                      >
                        <Pencil2Icon />
                      </Button>
                      <AlertDestructive onClick={() => handleDeleteMember()} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default MembersListPage;
