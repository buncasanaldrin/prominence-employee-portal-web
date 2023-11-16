import React from "react";
import {
  PersonIcon,
  IdCardIcon,
  ClipboardIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WelcomeImage from "@/pages/dashboard/WelcomeImage";
import AboutUs from "@/pages/dashboard/AboutUs";

type DashboardBoxProps = {
  isRed?: boolean;
  title: string;
  icon: React.ElementType;
};

const DashboardBox: React.FC<DashboardBoxProps> = ({
  isRed = false,
  title,
  icon: Icon,
}) => {
  return (
    <Card>
      <CardHeader
        className={`flex min-h-[120px] flex-row items-center justify-between rounded-lg ${
          isRed ? "bg-red-900" : "bg-cyan-900"
        } text-white`}
      >
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Icon className="h-8 w-8" />
      </CardHeader>
    </Card>
  );
};

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-[20px]">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        <Card className="col-span-3 md:col-span-6">
          <CardContent>
            <WelcomeImage />
          </CardContent>
        </Card>
        <AboutUs />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardBox
          title="Enrollment / Disenrollment"
          icon={PersonIcon}
          isRed
        />
        <DashboardBox title="View ID Card" icon={IdCardIcon} />
        <DashboardBox title="New Hire Packets" icon={ClipboardIcon} isRed />
        <DashboardBox title="Pay Your Bill" icon={FileTextIcon} />
      </div>
    </div>
  );
};

export default DashboardPage;
