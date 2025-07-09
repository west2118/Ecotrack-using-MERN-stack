import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "../ui/label";

type Items = {
  _id: string;
  userUid: string;
  category: string;
  activity: string;
  details: string;
  CO2: number;
  note: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type TotalSummaryCardProps = {
  items: Items[];
  totalCO2: number;
};

const TotalSummaryCard = ({ items, totalCO2 }: TotalSummaryCardProps) => {
  const getTotal = (category: string) => {
    return items
      ?.filter((item) => item.category === category)
      .reduce((total, sum) => total + sum.CO2, 0)
      .toFixed(2);
  };

  const totalPercentageTransport = (category: string) => {
    return totalCO2 ? (Number(getTotal(category)) / totalCO2) * 100 : 0.0;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Totals Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="space-y-2 p-4 border rounded-lg">
            <Label>Transport Impact</Label>
            <div className="text-2xl font-bold">{getTotal("Transport")} kg</div>
            <div className="text-sm text-gray-600">
              {totalPercentageTransport("Transport").toFixed(2)}% of total
            </div>
          </div>
          <div className="space-y-2 p-4 border rounded-lg">
            <Label>Foods Impact</Label>
            <div className="text-2xl font-bold">{getTotal("Foods")} kg</div>
            <div className="text-sm text-gray-600">
              {totalPercentageTransport("Foods").toFixed(2)}% of total
            </div>
          </div>
          <div className="space-y-2 p-4 border rounded-lg">
            <Label>Energy Use Impact</Label>
            <div className="text-2xl font-bold">
              {getTotal("Energy Use")} kg
            </div>
            <div className="text-sm text-gray-600">
              {totalPercentageTransport("Energy Use").toFixed(2)}% of total
            </div>
          </div>
          <div className="space-y-2 p-4 border rounded-lg">
            <Label>Purchases Impact</Label>
            <div className="text-2xl font-bold">{getTotal("Purchases")} kg</div>
            <div className="text-sm text-gray-600">
              {totalPercentageTransport("Purchases").toFixed(2)}% of total
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalSummaryCard;
