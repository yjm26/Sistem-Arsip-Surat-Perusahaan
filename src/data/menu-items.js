import {LayoutDashboard, Mails, Notebook, LibraryBig, LogOut} from "lucide-react";
export const menuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Transaksi Surat",
    url: "#",
    icon: Mails,
    children: [
      { title: "Surat Masuk", url: "#surat-masuk" },
      { title: "Surat Keluar", url: "#surat-keluar" },
    ],
  },
  {
    title: "Buku Agenda",
    url: "#",
    icon: Notebook,
  },
  {
    title: "Refrensi",
    url: "#",
    icon: LibraryBig,
  },
];


export const footerItem = {
  img : "./public/img/greeting.jpg",
  user: "Admin Karina",
  url: "#logout",
  icon: LogOut,
};

