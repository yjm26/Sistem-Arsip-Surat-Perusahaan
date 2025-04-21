import { HomeIcon, InboxIcon, BookmarkSquareIcon, BookOpenIcon, ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

export const menuItems = [
  {
    title: "Beranda",
    url: "#",
    icon: HomeIcon,
  },
  {
    title: "Transaksi Surat",
    url: "#",
    icon: InboxIcon,
    children: [
      { title: "Surat Masuk", url: "#surat-masuk" },
      { title: "Surat Keluar", url: "#surat-keluar" },
    ],
  },
  {
    title: "Buku Agenda",
    url: "#",
    icon: BookmarkSquareIcon,
  },
  {
    title: "Refrensi",
    url: "#",
    icon: BookOpenIcon,
  },
];


export const footerItem = {
  title: "Logout",
  url: "#logout",
  icon: ArrowLeftEndOnRectangleIcon,
};