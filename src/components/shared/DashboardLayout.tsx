import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/components/shared/Sidebar";
import UserNav from "@/components/shared/UserNav";

const DashboardLayout: React.FC = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div className="flex flex-col">
        <div className="col-span-12">
          <div className="flex h-16 items-center px-[25px]">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-[10px]">
                <img
                  src="/logo.png"
                  className="h-[38px] w-[35px] object-contain"
                />
                <h2 className="text-[25px] font-[700]">Inoviti</h2>
              </div>
              <div className="flex items-center justify-end space-x-5">
                <UserNav />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="grid w-full grid-cols-1 bg-[#F4F4F4] px-[25px] py-[28px]">
            <div className="h-full w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
