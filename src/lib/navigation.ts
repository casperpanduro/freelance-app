import {
  BuildingOfficeIcon,
  ChartPieIcon,
  ClockIcon, CogIcon,
  CreditCardIcon,
  FolderIcon,
  HomeIcon, UsersIcon
} from "@heroicons/react/24/outline";
import { Command } from "lucide-react";

export const nav_items = {
  main: {
    items: [
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
    ]
  },
  manage: {
    title: "Manage",
    items: [
      {
        title: "Reports",
        href: "/admin/reports",
        icon: ChartPieIcon,
      },
      {
        title: "Team",
        href: "/admin/team",
        icon: UsersIcon,
      },
      {
        title: "Integrations",
        href: "/admin/integrations",
        icon: Command,
      },
      {
        title: "Settings",
        href: "/admin/settings",
        icon: CogIcon,
      },
    ]
  }
};
