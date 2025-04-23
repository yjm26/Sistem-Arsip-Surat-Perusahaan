import {MailWarning, MailPlus, MailMinus} from "lucide-react"


export const statisticsCardsData = [
  {
    color: "gray",
    icon: MailPlus, 
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
    icon: MailMinus, 
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
    icon: MailWarning, // Ikon kustom
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
