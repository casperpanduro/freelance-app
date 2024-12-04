import { Calendar, ChevronDown, ChevronUp, Command, Home, Inbox, Search, Settings, User2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent, SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader,
  SidebarMenu, SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import {
  BuildingOfficeIcon,
  ChartPieIcon,
  ClockIcon, CogIcon,
  CreditCardIcon,
  FolderIcon,
  HomeIcon, UsersIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import AppSidebarHeader from "@/components/app-sidebar-header";
import AppSidebarFooter from "@/components/app-sidebar-footer";
import NavManage from "@/components/nav-manage";
import NavMain from "@/components/nav-main";

// Menu items.
const items = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: HomeIcon,
  },
  {
    title: "Registrations",
    href: "/admin/registrations",
    icon: ClockIcon,
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: FolderIcon,
  },
  {
    title: "Invoices",
    href: "/admin/invoices",
    icon: CreditCardIcon,
  },
  {
    title: "Clients",
    href: "/admin/clients",
    icon: BuildingOfficeIcon,
  },
];


export function AppSidebar() {
  return (
    <Sidebar variant={"inset"} className={""}>
      <AppSidebarHeader />
      <SidebarContent>
        <NavMain />
        <NavManage />
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  )
}
