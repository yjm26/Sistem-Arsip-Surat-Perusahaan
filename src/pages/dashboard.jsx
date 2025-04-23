import React from "react";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppChart } from "@/components/ui/app-chart";
import { StatisticsCards } from "@/components/ui/app-statistic-card";
import { AppTitlePage } from "@/components/ui/app-titlepage";

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 text-white">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </aside>

      {/* Main Content */}
      <main className="flex-1  bg-gray-100 p-8 flex flex-col items-center justify-center">
        <section>
          <AppTitlePage /> 
        </section>
        {/* Chart and Statistics Section */}
        <section className="flex flex-row bg-white shadow-md rounded-b-lg p-15 w-[1368px] h-[782px] shadow-slate-200">
          {/* Chart Section */}
          <div className="flex-1 px-4">
            <AppChart />
          </div>

          {/* Statistics Section */}
          <div className="flex-1 pl-4 flex flex-col space-y-1">
            <StatisticsCards />
          </div>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;