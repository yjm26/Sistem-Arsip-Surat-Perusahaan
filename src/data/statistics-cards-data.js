import { InboxArrowDownIcon, InboxIcon } from '@heroicons/react/24/outline'
export const statisticsCardsData = [
  {
    color: "gray",
    icon: InboxArrowDownIcon, // Ikon dari Heroicons
    title: "Surat Masuk",
    value: "0",
    footer: {
      color: "text-green-500",
      value: "+0",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: InboxIcon, // Ikon dari Heroicons
    title: "Surat Keluar",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: InboxIcon, // Ikon kustom
    title: "Surat Disposisi",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
];
export default statisticsCardsData;
