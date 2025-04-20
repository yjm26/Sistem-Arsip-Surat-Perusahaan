import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
export const statisticsCardsData = [
  {
    color: "gray",
    icon: Inbox,
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
    icon: Inbox,
    title: "Today's Users",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: Inbox,
    title: "New Clients",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },

  {
    color: "gray",
    icon: Inbox,
    title: "New Clients",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },

];

export default statisticsCardsData;
