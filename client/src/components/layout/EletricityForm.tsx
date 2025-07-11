"use client";

import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserStore } from "@/stores/useUserStore";
import { useForm } from "@/hooks/useForm";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

type FormData = {
  watts: string;
  notes: string;
  activity: string;
};

type ElectricityFormProps = {
  category: string;
  content: string;
};

const ElectricityForm = ({ category, content }: ElectricityFormProps) => {
  const router = useRouter();
  const token = useUserStore((state) => state.userToken);
  const user = useUserStore((state) => state.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { formData, handleChange, setField } = useForm<FormData>({
    watts: "",
    notes: "",
    activity: "",
  });

  useEffect(() => {
    if (content && category === "Electricity") {
      setField("activity", content);
    }
  }, [content]);

  const getCO2 = async (watts: number) => {
    try {
      const response = await axios.post("/api/emissions/electricity", {
        watts,
        country: user?.country,
      });

      return response.data.data.attributes.carbon_kg;
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

    const CO2 = await getCO2(Number(formData.watts));

    if (CO2 == null) {
      throw new Error("Failed to calculate CO₂. Please try again.");
    }

    try {
      const response = await axios.post(
        "/api/act/postAct",
        {
          CO2,
          category: "Energy Use",
          activity: formData.activity,
          details: formData.watts,
          note: formData.notes,
          user: user?.uid,
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
        <div className="grid grid-cols-2 gap-4">
          {/* Watts input */}
          <div className="space-y-2">
            <Label>Watts (mwh)</Label>
            <Input
              name="watts"
              value={formData.watts}
              onChange={handleChange}
              className="py-4.5"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={7}
              placeholder="10"
            />
          </div>

          {/* Activity input */}
          <div className="space-y-2">
            <Label>Activity</Label>
            <Input
              name="activity"
              value={formData.activity}
              onChange={handleChange}
              className="py-4.5"
              type="text"
              placeholder="e.g., Aircon, Computer"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Notes (optional)</Label>
          <Textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Add any details about this activity..."
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

export default ElectricityForm;
