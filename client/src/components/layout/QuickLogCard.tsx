"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const QuickLogCard = () => {
  const router = useRouter();

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <div>
            <CardTitle>Quick Log</CardTitle>
            <CardDescription>
              Log common activities with one tap
            </CardDescription>
          </div>
          <button
            onClick={() => router.push("/create-activity")}
            className="text-white bg-emerald-600 hover:bg-emerald-700 rounded-full w-8 h-8 flex items-center justify-center"
            title="Create Activity">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Button variant="outline" className="h-24 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-2 text-emerald-600">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Ate Meat
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-2 text-emerald-600">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Vegan Meal
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-2 text-emerald-600">
              <path d="M12 2v4"></path>
              <path d="m16.24 7.76 2.83-2.83"></path>
              <path d="M18 12h4"></path>
              <path d="m16.24 16.24 2.83 2.83"></path>
              <path d="M12 18v4"></path>
              <path d="m7.76 16.24-2.83 2.83"></path>
              <path d="M6 12H2"></path>
              <path d="m7.76 7.76-2.83-2.83"></path>
            </svg>
            Used AC
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-2 text-emerald-600">
              <path d="M12 2v4"></path>
              <path d="m16.24 7.76 2.83-2.83"></path>
              <path d="M18 12h4"></path>
              <path d="m16.24 16.24 2.83 2.83"></path>
              <path d="M12 18v4"></path>
              <path d="m7.76 16.24-2.83 2.83"></path>
              <path d="M6 12H2"></path>
              <path d="m7.76 7.76-2.83-2.83"></path>
            </svg>
            Used Fan
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-2 text-emerald-600">
              <path d="M14 19a6 6 0 0 0-12 0"></path>
              <circle cx="8" cy="9" r="4"></circle>
              <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path>
            </svg>
            Drove Car
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-2 text-emerald-600">
              <path d="M2 12h5"></path>
              <path d="M19 12h5"></path>
              <path d="M12 2v5"></path>
              <path d="M12 19v5"></path>
            </svg>
            Took Train
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-2 text-emerald-600">
              <path d="M12 2v4"></path>
              <path d="m16.24 7.76 2.83-2.83"></path>
              <path d="M18 12h4"></path>
              <path d="m16.24 16.24 2.83 2.83"></path>
              <path d="M12 18v4"></path>
              <path d="m7.76 16.24-2.83 2.83"></path>
              <path d="M6 12H2"></path>
              <path d="m7.76 7.76-2.83-2.83"></path>
            </svg>
            Plastic Waste
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-2 text-emerald-600">
              <path d="M12 2v4"></path>
              <path d="m16.24 7.76 2.83-2.83"></path>
              <path d="M18 12h4"></path>
              <path d="m16.24 16.24 2.83 2.83"></path>
              <path d="M12 18v4"></path>
              <path d="m7.76 16.24-2.83 2.83"></path>
              <path d="M6 12H2"></path>
              <path d="m7.76 7.76-2.83-2.83"></path>
            </svg>
            Recycled
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickLogCard;
