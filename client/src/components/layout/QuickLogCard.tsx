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
import {
  Book,
  Car,
  Fan,
  Leaf,
  Package,
  Plus,
  RefreshCw,
  ShoppingBag,
  Sun,
  Train,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";

const quickLogActivities = [
  { label: "Ate Meat", icon: Book, category: "Foods" },
  { label: "Vegan Meal", icon: Leaf, category: "Foods" },
  { label: "Used AC", icon: Sun, category: "Electricity" },
  { label: "Used Fan", icon: Fan, category: "Electricity" },
  { label: "Drove Car", icon: Car, category: "Transport" },
  { label: "Took Train", icon: Train, category: "Transport" },
  { label: "Bought Clothes", icon: ShoppingBag, category: "Purchases" },
  { label: "Online Purchase", icon: Package, category: "Purchases" },
];

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
            onClick={() => router.push("/activity/create")}
            className="text-white bg-emerald-600 hover:bg-emerald-700 rounded-full w-8 h-8 flex items-center justify-center"
            title="Create Activity">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {quickLogActivities.map((activity) => (
            <Button
              onClick={() =>
                router.push(
                  `/activity/create?category=${activity.category}&content=${activity.label} `
                )
              }
              key={activity.label}
              variant="outline"
              className="h-24 flex-col">
              <activity.icon className="mb-2 text-emerald-600" />
              {activity.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickLogCard;
