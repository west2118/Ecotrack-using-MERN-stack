"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import useFetchData from "@/hooks/useFetchData";
import { targets } from "@/constants/targets";

type Activity = {
  _id: string;
  userUid: string;
  category: string;
  activity: string;
  details: string;
  CO2: number;
  note: string;
  item: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export default function AISuggestionsPage() {
  const router = useRouter();
  const userTarget = useUserStore((state) => state.user?.target);
  const token = useUserStore((state) => state.userToken);

  const [showAll, setShowAll] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resultArray, setResultArray] = useState<any>([]);

  const {
    items: weeklyItems,
    fetchData: fetchWeekly,
    loading: loadingWeekly,
  } = useFetchData<Activity>();

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!token) return;

    fetchWeekly("/api/act/getUserActRange?range=weekly", token);
  }, [token]);

  useEffect(() => {
    if (!token || hasFetched.current) return;

    hasFetched.current = true;

    setIsLoading(true);

    const getSuggestion = async () => {
      try {
        const response = await axios.get("/api/ai/suggestions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setResultArray(response?.data);
        console.log("Data: ", response?.data);
      } catch (error: any) {
        console.error(error);
        toast.error(error.response?.data?.error || error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getSuggestion();
  }, [token]);

  const sumCO2 = (items: Activity[]) =>
    items.reduce((sum, item) => sum + (item.CO2 || 0), 0);

  const totalWeekly = sumCO2(weeklyItems).toFixed(2);
  const targetGoal =
    targets?.find((target) => target.value === userTarget)?.kg || 1;
  const progressPercent =
    Math.min((Number(totalWeekly) / targetGoal) * 100, 100) || 0;

  if (isLoading) {
    return (
      <div className="h-screeen flex items-center justify-center">
        <p>Is Loading...</p>
      </div>
    );
  }

  console.log(resultArray);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-50">
      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-4">
          {/* Left Arrow Button */}
          <button
            onClick={() => router.push("/dashboard")}
            className="text-emerald-600 hover:text-emerald-800 transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        <div className="space-y-6">
          {/* Weekly Goals Review */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Goals Review</CardTitle>
              <CardDescription>
                How you're doing with your sustainability targets
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Carbon Reduction Goal</Label>
                  <Badge variant="outline">
                    {Math.floor(progressPercent)}% complete
                  </Badge>
                </div>
                <Progress
                  value={progressPercent}
                  className="w-full bg-gray-200"
                />
                <p className="text-sm text-gray-500">
                  <span
                    className={`font-semibold ${
                      Number(totalWeekly) > targetGoal
                        ? "text-red-700"
                        : "text-gray-700"
                    }`}>
                    {Math.abs(targetGoal - Number(totalWeekly)).toFixed(2)}kg
                  </span>{" "}
                  {Number(totalWeekly) > targetGoal
                    ? "over your weekly carbon goal"
                    : "remaining to hit weekly target"}{" "}
                  ({targetGoal}kg)
                </p>
              </div>

              <div className="space-y-2">
                <Label>Motivational Message</Label>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <p className="text-gray-700 italic text-center">
                    {resultArray[0]?.motivational}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personalized Reduction Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Personalized Reduction Tips</CardTitle>
              <CardDescription>
                AI-powered suggestions based on your activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {(showAll ? resultArray.slice(1) : resultArray.slice(1, 4)).map(
                (act: any, index: number) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-emerald-600">
                            <path d="M12 2v4"></path>
                            <path d="m16.24 7.76 2.83-2.83"></path>
                            <path d="M18 12h4"></path>
                            <path d="m16.24 16.24 2.83 2.83"></path>
                            <path d="M12 18v4"></path>
                            <path d="m7.76 16.24-2.83 2.83"></path>
                            <path d="M6 12H2"></path>
                            <path d="m7.76 7.76-2.83-2.83"></path>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">{act.title} Tip</h3>
                        <p className="text-gray-700">{act.tip}</p>
                        <div className="mt-2">
                          <p className="text-sm font-medium">
                            Potential savings: {act.potentialSavings}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </CardContent>

            {resultArray.length > 4 && (
              <CardFooter>
                <Button
                  onClick={() => setShowAll(!showAll)}
                  variant="outline"
                  className="w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Show {showAll ? "Less" : "More"} Suggestions
                </Button>
              </CardFooter>
            )}
          </Card>

          {/* Weekly Challenge */}
          {/* <Card>
            <CardHeader>
              <CardTitle>This Week's Challenge</CardTitle>
              <CardDescription>
                Join others in this community challenge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-emerald-50 rounded-lg">
                <h3 className="font-medium mb-2">"Meatless Monday Plus"</h3>
                <p className="text-gray-700 mb-3">
                  Go meat-free for one day this week AND try a plant-based milk
                  alternative in your coffee/tea.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline">Current participants: 1,248</Badge>
                  <Badge variant="outline">Avg. savings: 3.2kg CO₂</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Learn More</Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Join Challenge
              </Button>
            </CardFooter>
          </Card> */}
        </div>
      </main>
    </div>
  );
}
