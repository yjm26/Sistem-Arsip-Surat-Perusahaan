import statisticsCardsData from "@/data/statistics-cards-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function StatisticsCards() {
  return (
    <div className="flex flex-col gap-10">
      {statisticsCardsData.map((stat) => (
        <Card
          key={stat.title} // Menggunakan title sebagai key
          className="flex flex-col bg-white rounded-lg w-[400px] h-full justify-between shadow-0"
        >
          <CardContent className="flex items-center pt-1">
            {/* Icon */}
            <div>
              <stat.icon className="w-[120px] h-[80px] stroke-[0.5px]" />
            </div>

            {/* Title and Value */}
            <div>
              <h2 className="text-sm font-medium text-gray-600">{stat.title}</h2>
              <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </CardContent>

          {/* Footer */}
          <CardFooter className="flex items-center justify-between px-4 py-2">
            <div className={`${stat.footer.color}`}>
              <p className="text-sm font-medium">{stat.footer.value}</p>
            </div>
            <p className="text-sm text-gray-500">{stat.footer.label}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}