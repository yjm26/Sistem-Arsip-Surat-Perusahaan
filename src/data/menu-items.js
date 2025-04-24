import {LayoutDashboard, Mails, Notebook, LibraryBig, LogOut} from "lucide-react";
export const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Transaksi Surat",
    icon: Mails,
    children: [
      { title: "Surat Masuk", url: "/dashboard/surat-masuk" },
      { title: "Surat Keluar", url: "/dashboard/surat-keluar" },
    ],
  },
  {
    title: "Buku Agenda",
    url: "/dashboard/agenda",
    icon: Notebook,
  },
  {
    title: "Refrensi",
    url: "#",
    icon: LibraryBig,
  },
];

export const footerItem = {
  img : "/img/greeting.jpg",
  user: "Admin Karina",
  url: "#logout",
  icon: LogOut,
};

