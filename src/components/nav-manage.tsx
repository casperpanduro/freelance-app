import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ChartPieIcon, CogIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Command } from "lucide-react";
import { nav_items } from "@/lib/navigation";

const manage = [
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
];

const NavManage = () => {

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{nav_items.manage.title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {nav_items.manage.items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default NavManage;
