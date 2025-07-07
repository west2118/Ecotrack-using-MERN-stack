import React, { useEffect } from "react";
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
import { useUserStore } from "@/stores/useUserStore";
import useFetchData from "@/hooks/useFetchData";
import { Loader2 } from "lucide-react";
import { targets } from "@/constants/targets";

type Activity = {
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

const DailyImpactCard = () => {
  const userTarget = useUserStore((state) => state.user?.target);
  const token = useUserStore((state) => state.userToken);

  const {
    items: todayItems,
    fetchData: fetchToday,
    loading: loadingToday,
  } = useFetchData<Activity>();

  const {
    items: yesterdayItems,
    fetchData: fetchYesterday,
    loading: loadingYesterday,
  } = useFetchData<Activity>();

  const {
    items: weeklyItems,
    fetchData: fetchWeekly,
    loading: loadingWeekly,
  } = useFetchData<Activity>();

  useEffect(() => {
    if (!token) return;

    fetchToday("/api/act/getUserActRange?range=today", token);
    fetchYesterday("/api/act/getUserActRange?range=yesterday", token);
    fetchWeekly("/api/act/getUserActRange?range=weekly", token);
  }, [token]);

  const sumCO2 = (items: Activity[]) =>
    items.reduce((sum, item) => sum + (item.CO2 || 0), 0);

  const totalToday = sumCO2(todayItems).toFixed(2);
  const totalYesterday = sumCO2(yesterdayItems).toFixed(2);
  const totalWeekly = sumCO2(weeklyItems).toFixed(2);

  console.log(totalToday, totalYesterday, totalWeekly);

  const difference = (Number(totalYesterday) - Number(totalToday)).toFixed(2);
  const targetGoal =
    targets?.find((target) => target.value === userTarget)?.kg || 1;
  const progressPercent =
    Math.min((Number(totalWeekly) / targetGoal) * 100, 100) || 0;

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
              {/* <Badge variant="outline">Updated 1h ago</Badge> */}
            </div>
            <div className="flex items-end space-x-2">
              <span className="text-4xl font-bold">
                {loadingToday ? (
                  <Loader2 className="w-10 h-10 animate-spin text-emerald-600" />
                ) : (
                  totalToday
                )}
              </span>
              <span className="text-lg text-gray-600">kg CO₂</span>
            </div>
            <p className="text-sm text-gray-600">
              {Number(difference) > 0
                ? `↓ ${difference}kg from yesterday`
                : `↑ ${Math.abs(Number(difference)).toFixed(
                    2
                  )}kg from yesterday`}
            </p>
          </div>
          <div className="p-4 border rounded-lg space-y-2">
            <Label>Weekly Goal Progress</Label>

            <div className="flex items-baseline space-x-1">
              <span className="text-4xl font-bold">
                {loadingWeekly ? (
                  <Loader2 className="w-10 h-10 animate-spin text-emerald-600" />
                ) : (
                  Math.floor(progressPercent)
                )}
              </span>
              <span className="text-lg text-gray-600 font-medium">%</span>
            </div>

            <Progress value={progressPercent} className="w-full bg-gray-200" />

            <p className="text-sm text-gray-500">
              <span
                className={`font-semibold ${
                  Number(totalWeekly) > targetGoal
                    ? "text-red-700"
                    : "text-gray-700"
                }`}>
                {Math.abs(targetGoal - Number(totalWeekly))}kg
              </span>{" "}
              {Number(totalWeekly) > targetGoal
                ? "over your weekly carbon goal"
                : "remaining to hit weekly target"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyImpactCard;
