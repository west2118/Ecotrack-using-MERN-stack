"use client";

import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm } from "@/hooks/useForm";
import { foods } from "@/constants/foods";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";

type FormData = {
  grams: string;
  notes: string;
  activity: string;
};

type FoodFormProps = {
  category: string;
  content: string;
};

const FoodForm = ({ category, content }: FoodFormProps) => {
  const router = useRouter();
  const token = useUserStore((state) => state.userToken);
  const userUid = useUserStore((state) => state.user?.uid);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFood, setSelectedFood] = useState("");
  const { formData, handleChange, setField } = useForm<FormData>({
    grams: "",
    notes: "",
    activity: "",
  });

  useEffect(() => {
    if (content && category === "Foods") {
      setField("activity", content);
    }
  }, [content]);

  const getCO2 = async (food: string, grams: number) => {
    try {
      const response = await axios.post("/api/emissions/food", {
        food,
        grams,
      });

      return response.data.co2;
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value.trim() === "")) {
      return toast.error("Missing Required Field");
    }

    setIsLoading(true);

    const CO2 = await getCO2(selectedFood, Number(formData.grams));

    if (CO2 == null) {
      throw new Error("Failed to calculate CO₂. Please try again.");
    }

    try {
      const response = await axios.post(
        "/api/act/postAct",
        {
          CO2,
          category: "Foods",
          activity: formData.activity,
          details: formData.grams,
          note: formData.notes,
          item: selectedFood,
          userUid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data?.message);
      router.push("/logs");
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Food */}
          <div className="space-y-2">
            <Label htmlFor="food">Food</Label>
            <select
              id="food"
              name="food"
              value={selectedFood}
              onChange={(e) => setSelectedFood(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm">
              <option value="" disabled>
                Select a food
              </option>
              {Object.entries(foods).map(([key]) => (
                <option key={key} value={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Activity */}
          <div className="space-y-2">
            <Label htmlFor="activity">Activity</Label>
            <input
              id="activity"
              name="activity"
              type="text"
              value={formData.activity}
              onChange={handleChange}
              placeholder="e.g. Eat at steakhouse"
              className="w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Grams</Label>
          <Input
            name="grams"
            value={formData.grams}
            onChange={handleChange}
            className="py-4.5"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={7}
            placeholder="e.g. 100"
          />
        </div>

        <div className="space-y-2">
          <Label>Notes (optional)</Label>
          <Textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Add any details about this meal..."
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          onClick={() => router.push("/dashboard")}
          type="button"
          variant="outline">
          Cancel
        </Button>
        <Button
          disabled={isLoading}
          className="bg-emerald-600 hover:bg-emerald-700 text-white">
          {isLoading ? <Loader className="animate-spin h-5 w-5" /> : ""}
          Log Activity
        </Button>
      </div>
    </form>
  );
};

export default FoodForm;
