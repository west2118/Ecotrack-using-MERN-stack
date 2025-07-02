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
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-50">
      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
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
              <div className="space-y-2">
                <Label>Country</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
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
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your primary goal" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="reduce">
                      Reduce my carbon footprint
                    </SelectItem>
                    <SelectItem value="monitor">
                      Monitor my environmental impact
                    </SelectItem>
                    <SelectItem value="learn">
                      Learn about sustainable living
                    </SelectItem>
                    <SelectItem value="compete">
                      Compete with friends on eco-challenges
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Weekly Carbon Reduction Target</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select target" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="light">Light (5% reduction)</SelectItem>
                    <SelectItem value="moderate">
                      Moderate (10% reduction)
                    </SelectItem>
                    <SelectItem value="aggressive">
                      Aggressive (20% reduction)
                    </SelectItem>
                    <SelectItem value="extreme">
                      Extreme (30% reduction)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between">
            <Button variant="outline">Back</Button>
            <Button
              onClick={() => router.push("/dashboard")}
              className="bg-emerald-600 text-white hover:bg-emerald-700">
              Complete Setup
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
