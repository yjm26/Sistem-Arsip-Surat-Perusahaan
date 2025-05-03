import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { surat: "Masuk", desktop: 186 },
  { surat: "Keluar", desktop: 305 },
  { surat: "Disposisi", desktop: 237 },
];

const chartConfig = {
  desktop: {
    label: "Surat",
    color: "#77A8EC",
  },
};

export function AppChart() {
  return (
    <Card className="w-[800px] mx-auto h-full p-4">
      <CardHeader>
        <CardTitle>Recap Surat</CardTitle>
        <CardDescription>April</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            width={500} 
            height={300} 
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="surat"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
              <LabelList
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={10} // Reduced font size for labels
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Lebih banyak 2.5% dari bulan kemarin <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          <p>Menampilkan surat selama periode bulan April</p>
        </div>
      </CardFooter>
    </Card>
  );
}
