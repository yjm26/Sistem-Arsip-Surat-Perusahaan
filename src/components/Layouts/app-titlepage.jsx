import { LayoutDashboard } from "lucide-react";

export function AppTitlePage() {
  return (
    <div className="bg-white w-[1368px] shadow-md border-b-0.5 rounded-t-sm p-2 mb-0.5 font-semibold flex items-center space-x-2">
      {/* Icon */}
      <span className="text-black p-1 border-r-1 ">
        <LayoutDashboard size={24} className="stroke-1" />
      </span>
      {/* Title */}
      <p>Dashboard</p>
    </div>
  );
}