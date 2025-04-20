import React from "react";
import { AppSidebar } from "@/components/ui/sidebar-dashboard";
import { SidebarProvider } from "@/components/ui/sidebar"; 

function Dashboard() {
  return (
    <SidebarProvider>
        <AppSidebar />
    </SidebarProvider>
  );
}

export default Dashboard;