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
  distance: string;
  notes: string;
};

const TransportForm = () => {
  const router = useRouter();
  const token = useUserStore((state) => state.userToken);
  const userUid = useUserStore((state) => state.user?.uid);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { formData, handleChange } = useForm<FormData>({
    distance: "",
    notes: "",
  });

  const getCO2 = async (distance: number) => {
    try {
      const response = await axios.post("/api/emissions/transport", {
        distance,
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

    try {
      const CO2 = await getCO2(Number(formData.distance));

      const response = await axios.post(
        "/api/act/postAct",
        {
          CO2,
          details: formData.distance,
          note: formData.notes,
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
        <div className="space-y-2">
          <Label>Distance (km)</Label>
          <Input
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            className="py-4.5"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={7}
            placeholder="10"
          />
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

export default TransportForm;
