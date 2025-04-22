import statisticsCardsData from "@/data/statistics-cards-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function StatisticsCards() {
  return (
    <div className="flex flex-wrap gap-4">
      {statisticsCardsData.map((stat, index) => (
        <Card
          key={index}
          className="flex bg-white rounded-lg w-[400px] h-[150px] items-center justify-between"
        >
          <CardContent className="flex items-center justify-evenly ">
            {/* Icon */}
            <div className="">
            <stat.icon className={`w-[120px]  h-[80px] stroke-[0.5px]`} />
            </div>

            <div className="">
            {/* Title */}
            <h2 className="text-sm font-medium text-gray-600">{stat.title}</h2>
            {/* Value */}
            <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </CardContent>

          <CardFooter>

          </CardFooter>
        </Card>
      ))}
    </div>
  );
}