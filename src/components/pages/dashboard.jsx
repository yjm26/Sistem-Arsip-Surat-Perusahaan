import React from "react";
import { AppSidebar } from "@/components/ui/app-dashboard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CardGreeting } from "@/components/ui/app-greeting-card";
import { StatisticsCards } from "@/components/ui/app-statistic-card";


function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">
        {/* Greeting Section */}
        <section className="mb-8">
          <CardGreeting />
        </section>

        {/* Statistics Section */}
        <section className="mb-8">
          <StatisticsCards />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;