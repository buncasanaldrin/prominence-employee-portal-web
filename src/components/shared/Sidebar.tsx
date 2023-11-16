import { DashboardIcon, PersonIcon } from "@radix-ui/react-icons";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar: React.FC<Props> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    {
      title: "Dashboard",
      icon: <DashboardIcon className="h-[24px] w-[24px]" />,
      url: "/",
    },
    {
      title: "Members",
      icon: <PersonIcon className="h-[24px] w-[24px]" />,
      url: "/members",
    },
    // {
    //   title: "Categories",
    //   icon: <CubeIcon className="h-[24px] w-[24px]" />,
    //   url: "/categories",
    // },
  ];

  const getBasePath = (url: string) => {
    const parts = url.split("/");
    if (parts.length >= 2) {
      return "/" + parts[1];
    }
    return url;
  };

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <div className="max-w-[250px] py-[25px]">
      <ScrollArea className="h-[600px] px-[16px]">
        <div className="space-y-[2px]">
          {menus?.map((menu, i) => (
            <Button
              key={`${menu.title}-${i}`}
              variant="ghost"
              size="xl"
              className={`w-full justify-start hover:bg-primary hover:text-[#FCFCFC] ${
                getBasePath(location.pathname) === menu.url
                  ? "bg-primary text-[#FCFCFC]"
                  : "bg-[#FCFCFC] text-[#808191]"
              }`}
              onClick={() => handleClick(menu.url)}
            >
              <h5 className="flex items-center justify-start space-x-[10px]">
                <span>{menu.icon}</span>
                <span>{menu.title}</span>
              </h5>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
