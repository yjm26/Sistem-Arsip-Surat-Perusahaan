import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { footerItem, menuItems } from "@/data/menu-items";
import { useNavigate } from "react-router-dom";

export function AppSidebar() {
  const navigate = useNavigate();
   // Handler logout
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Sidebar className="h-screen w-[265px] text-black">
      {/* Sidebar Header */}
      <SidebarHeader className="p-4 bg-[#FFFFFF]">
        <div className="flex items-center justify-center">
          <img
            src="/img/full-logo.png"
            alt="Logo"
            className="w-[150px] h-[150px] rounded-md"
          />
          </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="flex-1 bg-[#FFFFFF]">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.children ? (
                <>
                  {/* Parent Item */}
                  <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600  hover:text-blue-600">
                    <item.icon className="w-5 h-5 text-gray-600" />
                    <span>{item.title}</span>
                  </div>
                  {/* Submenu */}
                  <SidebarMenuSub>
                    {item.children.map((child) => (
                      <SidebarMenuSubItem key={child.title}>
                        <a
                          href={child.url}
                          className="block px-8 py-2 text-sm text-gray-600  hover:text-blue-600"
                        >
                          {child.title}
                        </a>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </>
              ) : (
                <a
                  href={item.url}
                  className="flex items-center gap-2 px-4 py-4 text-sm text-gray-600 hover:text-blue-600"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </a>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-4 bg-[#FFFFFF]">
        <div className="flex items-center gap-2">
          <img
            src={footerItem.img}
            alt="User"
            className="w-[40px] h-[40px] rounded-sm"
          />
          <div>
            <p className="text-sm font-medium">{footerItem.user}</p>
            <a
              href="#"
              onClick={handleLogout}
              className="text-xs text-gray-400 hover:text-red-600"
            >
              <footerItem.icon className="inline w-4 h-4 mr-1" />
              Logout
            </a>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;