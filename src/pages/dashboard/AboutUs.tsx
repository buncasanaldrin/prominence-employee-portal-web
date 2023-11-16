import React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutUs: React.FC = () => {
  return (
    <Card className="col-span-3 md:col-span-6">
      <div className="flex flex-col">
        <div className="relative hidden xl:block">
          <img src="/about-us.png" className="h-full w-full" />
        </div>
        <CardHeader>
          <CardTitle className="text-4xl">
            About Prominence Health Plan
          </CardTitle>
          <div className="flex flex-col gap-[20px] pt-[20px]">
            <CardDescription className="text-base">
              For more than 25 years, Prominence Health Plan has been keeping
              families, businesses and communities healthy by providing health
              service excellence and quality care to those we serve. We offer a
              spectrum of products, including employer sponsored commercial
              health plans, fully-insured administrative services through
              Prominence Administrative Services, and Medicare Advantage plans.
            </CardDescription>
            <CardDescription className="text-base">
              {
                "Our Prominence Cares approach is more than just a catchphrase. It's a way of thinking that is at the very core of all that we do."
              }
            </CardDescription>
            <CardDescription className="text-base">
              We realize how many people depend on us for innovative care and
              the strength we offer in personal, local relationships. Our values
              ensure compassionate, high-quality, affordable health services and
              focus on building connections with the members, providers and
              businesses we partner with.
            </CardDescription>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
};

export default AboutUs;
