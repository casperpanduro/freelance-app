import { ReactNode } from "react";
import AdminTitle from "@/components/ui/AdminTitle";
import AdminSidebar from "@/components/partials/AdminSidebar";
import {
  HomeIcon,
  ClockIcon,
  FolderIcon,
  UsersIcon,
  UserGroupIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
  ChartPieIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import SlideModal from "@/components/ui/Overlay";

export const metadata = {
  title: "Account",
  description: "Account",
};

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <HomeIcon className={"w-5 h-5"} />,
  },
  {
    title: "Registrations",
    href: "/admin/registrations",
    icon: <ClockIcon className={"w-5 h-5"} />,
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: <FolderIcon className={"w-5 h-5"} />,
  },
  {
    title: "Clients",
    href: "/admin/clients",
    icon: <BuildingOfficeIcon className={"w-5 h-5"} />,
  },
  {
    title: "Invoices",
    href: "/admin/invoices",
    icon: <CreditCardIcon className={"w-5 h-5"} />,
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: <ChartPieIcon className={"w-5 h-5"} />,
  },
  {
    title: "Team",
    href: "/admin/team",
    icon: <UsersIcon className={"w-5 h-5"} />,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: <CogIcon className={"w-5 h-5"} />,
  },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={"min-h-screen flex"}>
        <AdminSidebar menu={menu} />
        <div
          className={
            "bg-white text-zinc-800 w-full py-6 px-6 xl:px-12 flex flex-col"
          }
        >
          <AdminTitle items={menu} />
          <div className={"grow"}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
