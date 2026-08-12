"use client";
import { Bar, BarChart, BarShapeProps, Rectangle, XAxis } from "recharts";
import { ChartContainer, type ChartConfig } from "../ui/chart";

const weekday = ["日", "月", "火", "水", "木", "金", "土"] as const;

type HistoryDataType = {
  date: Date;
  amount: number;
};

type ChartDataType = HistoryDataType & { day: (typeof weekday)[number] };

const chartConfig: ChartConfig = {
  amount: {
    label: "day",
    color: "var(--accent-save)",
  },
};

const isToday = (date: Date): boolean => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

const coloredBar = (props: BarShapeProps) => {
  return (
    <Rectangle
      {...props}
      fill={
        isToday(props.payload.date)
          ? "var(--accent-save-deep)"
          : "var(--accent-save)"
      }
    />
  );
};

const HistoryChart = ({ data }: { data: HistoryDataType[] }) => {
  const chartData: ChartDataType[] = data.map((historyData) => {
    return {
      date: historyData.date,
      amount: historyData.amount,
      day: weekday[historyData.date.getDay()],
    };
  });

  return (
    <ChartContainer config={chartConfig} className="w-full">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <Bar dataKey="amount" radius={4} shape={coloredBar} />
      </BarChart>
    </ChartContainer>
  );
};

export { type HistoryDataType, HistoryChart };
