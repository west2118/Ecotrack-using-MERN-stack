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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useForm } from "@/hooks/useForm";
import { countries } from "@/constants/countries";
import { useState } from "react";
import { goals } from "@/constants/goals";
import { targets } from "@/constants/targets";
import axios from "axios";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Loader } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
};

type SelectData = {
  country: string;
  goal: string;
  target: string;
};

export default function OnboardingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectData, setSelectData] = useState<SelectData>({
    country: "",
    goal: "",
    target: "",
  });
  const { formData, handleChange } = useForm<FormData>({
    firstName: "",
    lastName: "",
  });

  const handleCustomChange = (name: string, value: string) => {
    setSelectData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const token = await auth.currentUser?.getIdToken();

    try {
      const response = await axios.post("/api/auth/verify", {
        ...formData,
        ...selectData,
        token,
      });

      console.log(response?.data?.user);
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-50">
      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Complete Your EcoProfile
            </h1>
            <p className="mt-2 text-gray-600">
              Help us calculate your carbon footprint accurately by providing
              these details
            </p>
          </div>

          {/* Location Card */}
          <Card>
            <CardHeader>
              <CardTitle>Your Location</CardTitle>
              <CardDescription>
                Carbon impact varies by region - select yours for accurate
                calculations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Country</Label>
                <Select
                  name="country"
                  value={selectData.country}
                  onValueChange={(value) =>
                    handleCustomChange("country", value)
                  }>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Goals Card */}
          <Card>
            <CardHeader>
              <CardTitle>Set Your Goals</CardTitle>
              <CardDescription>
                What would you like to achieve with EcoTrack?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Main Sustainability Goal</Label>
                <Select
                  name="goal"
                  value={selectData.goal}
                  onValueChange={(value) => handleCustomChange("goal", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your primary goal" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {goals.map((goal) => (
                      <SelectItem key={goal.value} value={goal.value}>
                        {goal.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Weekly Carbon Reduction Target</Label>
                <Select
                  name="target"
                  value={selectData.target}
                  onValueChange={(value) =>
                    handleCustomChange("target", value)
                  }>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select target" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {targets.map((target) => (
                      <SelectItem key={target.value} value={target.value}>
                        {target.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between">
            <Button type="button" variant="outline">
              Back
            </Button>
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
              {isLoading ? <Loader className="animate-spin h-5 w-5" /> : ""}{" "}
              Complete Setup
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
