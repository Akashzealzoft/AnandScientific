import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Company Profile",
    path: "/",
    newTab: false,
  },
  {
    id: 3,
    title: "Our Products",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Laboratory Equipment",
        path: "/laboratory",
        newTab: false,
      },
      {
        id: 42,
        title: "PH Detector",
        path: "/phdetector",
        newTab: false,
      },
      {
        id: 43,
        title: "PH Meter",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Digital ViscoMeter",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Laboratory Microscope",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Soil testing Equipment",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Micrological Equipment",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Medical Equipment",
        path: "/error",
        newTab: false,
      },
      {
        id: 49,
        title: "Blood Pressure Monitor",
        path: "/error",
        newTab: false,
      },
      {
        id: 50,
        title: "Cement Testing Equipment",
        path: "/error",
        newTab: false,
      },
      {
        id: 51,
        title: "Reagent racks",
        path: "/error",
        newTab: false,
      },
      {
        id: 52,
        title: "vaccum Pressure Pumps",
        path: "/error",
        newTab: false,
      },
      {
        id: 53,
        title: "Tablet Hardness tester",
        path: "/error",
        newTab: false,
      },
    ],

  },
  {
    id: 2,
    title: "Contact US",
    path: "/contact",
    newTab: false,

  }
];
export default menuData;
