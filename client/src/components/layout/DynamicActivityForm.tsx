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
import { useParams, useRouter } from "next/navigation";
import { items } from "@/constants/items";
import { foods } from "@/constants/foods";

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
  item: string;
};

type DynamicActivityFormProps = {
  category: string;
  mode: string;
  content?: string;
  activity?: Activity;
};

const DynamicActivityForm = ({
  category,
  content,
  activity,
  mode,
}: DynamicActivityFormProps) => {
  const { id } = useParams();
  const router = useRouter();
  const token = useUserStore((state) => state.userToken);
  const user = useUserStore((state) => state.user);
  const userUid = user?.uid;
  const country = user?.country;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState("");

  const { formData, handleChange, setField } = useForm<any>({
    distance: "",
    amount: "",
    grams: "",
    watts: "",
    notes: "",
    activity: "",
  });

  useEffect(() => {
    if (content) {
      setField("activity", content);
    }
  }, [content]);

  useEffect(() => {
    if (id && mode === "edit" && activity) {
      setField("distance", activity?.details || "");
      setField("amount", activity?.details || "");
      setField("grams", activity?.details || "");
      setField("watts", activity?.details || "");
      setField("notes", activity?.note || "");
      setField("activity", activity?.activity || "");

      if (
        activity?.category === "Foods" ||
        activity?.category === "Purchases"
      ) {
        setSelectedItem(activity?.item || "");
      }
    }
  }, [id, activity]);

  const getCO2 = async () => {
    try {
      switch (category) {
        case "Transport":
          const resTransport = await axios.post("/api/emissions/transport", {
            distance: Number(formData.distance),
          });
          return resTransport.data.data.attributes.carbon_kg;

        case "Purchases":
          const resPurchases = await axios.post("/api/emissions/purchases", {
            category: selectedItem,
            amount: Number(formData.amount),
          });
          return resPurchases.data.carbonKg;

        case "Foods":
          const resFood = await axios.post("/api/emissions/food", {
            food: selectedItem,
            grams: Number(formData.grams),
          });
          return resFood.data.co2;

        case "Electricity":
          const resElectricity = await axios.post(
            "/api/emissions/electricity",
            {
              watts: Number(formData.watts),
              country,
            }
          );
          return resElectricity.data.data.attributes.carbon_kg;

        default:
          return null;
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFieldsMap: Record<string, string[]> = {
      Transport: ["distance", "activity"],
      Purchases: ["amount", "activity"],
      Foods: ["grams", "activity"],
      Electricity: ["watts", "activity"],
    };

    const requiredFields = requiredFieldsMap[category];
    const hasEmpty = requiredFields.some(
      (field) => !formData[field] || formData[field].trim() === ""
    );

    if (
      hasEmpty ||
      (["Purchases", "Foods"].includes(category) && !selectedItem)
    ) {
      return toast.error("Missing Required Field");
    }

    setIsLoading(true);
    const CO2 = await getCO2();

    if (!CO2) {
      setIsLoading(false);
      return;
    }

    try {
      const payload: any = {
        CO2,
        category: category === "Electricity" ? "Energy Use" : category,
        activity: formData.activity,
        note: formData.notes,
        userUid: userUid || user?.uid,
        details:
          formData.distance ||
          formData.amount ||
          formData.grams ||
          formData.watts,
      };

      if (category === "Purchases" || category === "Foods") {
        payload.item = selectedItem;
      }

      console.log("Payload:", payload);

      let response;
      if (mode === "edit") {
        response = await axios.put(`/api/act/${id}`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        response = await axios.post("/api/act/postAct", payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      toast.success(response?.data?.message);
      router.push("/logs");
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderInputs = () => {
    switch (category) {
      case "Transport":
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Distance (km)</Label>
                <Input
                  name="distance"
                  value={formData.distance}
                  onChange={handleChange}
                  placeholder="e.g. 10"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              </div>
              <div className="space-y-2">
                <Label>Activity</Label>
                <Input
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  placeholder="e.g., Car"
                />
              </div>
            </div>
          </>
        );

      case "Purchases":
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Purchase</Label>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm">
                  <option value="">Select item</option>
                  {Object.keys(items).map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label>Activity</Label>
                <Input
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  placeholder="e.g., Buy clothes"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Amount</Label>
              <Input
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="e.g. 200"
                inputMode="numeric"
              />
            </div>
          </>
        );

      case "Foods":
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Food</Label>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm">
                  <option value="">Select food</option>
                  {Object.keys(foods).map((food) => (
                    <option key={food} value={food}>
                      {food}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label>Activity</Label>
                <Input
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  placeholder="e.g., Eat beef"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Grams</Label>
              <Input
                name="grams"
                value={formData.grams}
                onChange={handleChange}
                placeholder="e.g. 150"
                inputMode="numeric"
              />
            </div>
          </>
        );

      case "Electricity":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Watts (mwh)</Label>
              <Input
                name="watts"
                value={formData.watts}
                onChange={handleChange}
                placeholder="e.g. 10"
                inputMode="numeric"
              />
            </div>
            <div className="space-y-2">
              <Label>Activity</Label>
              <Input
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                placeholder="e.g. Aircon"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {renderInputs()}

      <div className="space-y-2">
        <Label>Notes (optional)</Label>
        <Textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Add any details about this activity..."
        />
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
          {mode === "edit" ? "Update" : "Log"} Activity
        </Button>
      </div>
    </form>
  );
};

export default DynamicActivityForm;
