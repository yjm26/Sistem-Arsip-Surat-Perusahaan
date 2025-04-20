import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function AppChart() {
  // Data untuk chart
  const data = [
    { name: "surat masuk", value: 21 },
    { name: "surat keluar", value: 29 },
    { name: "surat disposisi", value: 15 },
  ];

  return (
    <ChartContainer className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Grafik Transaksi Surat</h2>
        <button className="text-sm bg-gray-100 px-3 py-1 rounded-md">Today</button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltip />} />
          <Bar dataKey="value" fill="#60A5FA" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4">
        <p className="text-sm font-medium">Total Surat</p>
        <p className="text-lg font-bold">65</p>
      </div>
    </ChartContainer>
  );
}