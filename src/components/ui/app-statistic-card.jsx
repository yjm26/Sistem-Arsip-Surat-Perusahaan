import statisticsCardsData from "@/data/statistics-cards-data";
import { Card, CardContent } from "@/components/ui/card";

export function StatisticsCards() {
  return (
    <div className="flex flex-wrap gap-4">
      {statisticsCardsData.map((stat, index) => (
        <Card
          key={index}
          className="p-4 bg-white  rounded-lg w-[235px] h-[235px] justify-center" // 50% width minus gap
        >
          <CardContent className="flex flex-col items-center justify-center">
            {/* Icon */}
            <stat.icon className={`w-10 h-10 text-${stat.color}-500 mb-2`} />
            {/* Title */}
            <h2 className="text-sm font-medium text-gray-600">{stat.title}</h2>
            {/* Value */}
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}