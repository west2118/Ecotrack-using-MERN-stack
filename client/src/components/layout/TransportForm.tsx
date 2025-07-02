"use client";

import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "react-toastify";

type Vehicle = {
  id: string;
  name: string;
};

const TransportForm = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [formData, setFormData] = useState({
    model: "",
    distance: "",
    notes: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/emissions/vehicles");
        setVehicles(response.data);
      } catch (error: any) {
        toast.error(error.response?.data?.message || error.message);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    try {
      console.log(formData);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Vehicle Type</Label>
            <select
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="flex items-center h-10 px-3 text-sm border rounded-md w-full">
              <option disabled value="" className="text-gray-500">
                Select Model
              </option>
              {vehicles.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
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
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
          Log Activity
        </Button>
      </div>
    </form>
  );
};

export default TransportForm;
