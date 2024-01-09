import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Company Profile"
        description="Our 2004 established business venture, Anand Scientific Company has grown to become an eminent source of latest lab equipment in the Indian industry. We have been involved in the trading of best available equipment in the marketplace to serve and support numerous customers from varied industries. Our offerings for them range from Heavy Duty Lab Centrifuge, Water Proof PH Meter, PH Field Monitor, Metallurgical Microscope, Microprocessor Viscometer, Blood Pressure Monitor to more products. These are supplied by us from Chennai (Tamil Nadu) to various parts of the country. We have reliable facilities & resources to keep our business running in a sustainable manner across the nation."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
