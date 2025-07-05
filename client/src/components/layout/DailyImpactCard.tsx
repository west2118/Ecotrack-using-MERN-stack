import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

const DailyImpactCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Daily Impact</CardTitle>
        <CardDescription>Wednesday, June 12, 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2 p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <Label>Carbon Usage Today</Label>
              <Badge variant="outline">Updated 1h ago</Badge>
            </div>
            <div className="flex items-end space-x-2">
              <span className="text-4xl font-bold">8.2</span>
              <span className="text-lg text-gray-600">kg CO₂</span>
            </div>
            <p className="text-sm text-gray-600">↓ 1.3kg from yesterday</p>
          </div>
          <div className="space-y-2 p-4 border rounded-lg">
            <Label>Weekly Goal Progress</Label>
            <div className="flex items-end space-x-2">
              <span className="text-4xl font-bold">63</span>
              <span className="text-lg text-gray-600">%</span>
            </div>
            <Progress value={63} className="h-2 mt-2" />
            <p className="text-sm text-gray-600">
              3.7kg remaining to hit weekly target
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyImpactCard;
