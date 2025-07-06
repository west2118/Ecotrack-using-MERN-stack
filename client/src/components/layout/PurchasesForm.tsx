"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm } from "@/hooks/useForm";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";
import { items } from "@/constants/items";

type FormData = {
  amount: string;
  activity: string;
  notes: string;
};

const PurchasesForm = () => {
  const router = useRouter();
  const token = useUserStore((state) => state.userToken);
  const userUid = useUserStore((state) => state.user?.uid);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState("");
  const { formData, handleChange } = useForm<FormData>({
    amount: "",
    notes: "",
    activity: "",
  });

  const getCO2 = async (category: string, amount: number) => {
    try {
      const response = await axios.post("/api/emissions/purchases", {
        category,
        amount,
      });

      return response.data.carbonKg;
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

    const CO2 = await getCO2(selectedItem, Number(formData.amount));

    try {
      const response = await axios.post(
        "/api/act/postAct",
        {
          CO2,
          category: "Purchases",
          activity: formData.activity,
          details: formData.amount,
          note: formData.notes,
          item: selectedItem,
          userUid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
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
          {/* Purchase */}
          <div className="space-y-2">
            <Label htmlFor="purchase">Purchase</Label>
            <select
              id="purchase"
              name="purchase"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm">
              <option value="" disabled>
                Select a purchase
              </option>
              {Object.entries(items).map(([key]) => (
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
              placeholder="e.g. Buy at gucci"
              className="w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Amount</Label>
          <Input
            name="amount"
            value={formData.amount}
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
            placeholder="Add any details about this purchase..."
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline">
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

export default PurchasesForm;
