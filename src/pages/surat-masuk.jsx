import React from "react";
import {MailPlus} from "lucide-react"
import { AppSidebar } from "@/components/Layouts/app-sidebar.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppTitlePage } from "@/components/Layouts/app-titlepage";
function SuratMasuk() {
  return (
    <div className="flex h-screen">
          {/* Sidebar */}
          <aside>
            <SidebarProvider>
              <AppSidebar />
            </SidebarProvider>
          </aside>
    
          {/* Main Content */}  
          <main className="flex-1  bg-gray-100 p-8 flex flex-col items-center justify-center">
            <section>
              <AppTitlePage title="Surat Masuk" Icon={MailPlus}  /> 
            </section>
            {/* Table Section */}
            <section className="flex flex-row bg-white shadow-md rounded-b-lg p-15 w-[1368px] h-[782px] shadow-slate-200">
            
    
              
            </section>
    
          </main>
        </div>
  );
}

export default SuratMasuk; 