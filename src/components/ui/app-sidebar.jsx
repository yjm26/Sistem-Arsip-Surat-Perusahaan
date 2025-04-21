import { menuItems, footerItem } from "@/data/menu-items";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar";


export function AppSidebar() {
  return (
    <Sidebar className="w-[265px]">
      <SidebarHeader className="bg-white p-7">
        <div className="flex items-center justify-center">
          <img src="../public/img/full-logo.png" alt="" className="w-[150px] p-0 m-0" />
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-white border-0 border-[#F0F1F3]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">
              {menuItems.map((item) => (
                <SidebarMenuItem className="p-[10px]" key={item.title}>
                  {item.children ? (
                    <div className="flex flex-col">
                      {/* Parent Menu */}
                      <SidebarMenuButton asChild>
                        <div className="flex items-center space-x-2 cursor-pointer">
                          <item.icon />
                          <span className="text-[16px] font-semibold text-gray-600">{item.title}</span>
                        </div>
                      </SidebarMenuButton>

                      {/* Submenu */}
                      <div className="ml-6 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <a
                            key={child.title}
                            href={child.url}
                            className="flex items-center space-x-2 text-gray-500 hover:text-blue-500"
                          >
                            <span>+</span>
                            <span>{child.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center space-x-2">
                        <item.icon />
                        <span className="text-[16px] font-medium text-gray-600">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-white p-7">
        <a href={footerItem.url} className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
          <footerItem.icon className="w-5 h-5" />
          <span className="text-[16px] font-medium">{footerItem.title}</span>
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}