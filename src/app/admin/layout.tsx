import { ReactNode } from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AppHeader from "@/components/app-header";
import AppContent from "@/components/app-content";

export const metadata = {
  title: "Account",
  description: "Account",
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          <AppContent>
            {children}
          </AppContent>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default AdminLayout;
