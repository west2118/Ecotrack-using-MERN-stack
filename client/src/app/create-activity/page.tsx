"use client";

import TransportForm from "@/components/layout/TransportForm";
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
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

const navButtons = [
  {
    label: "Transport",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2">
        <path d="M14 19a6 6 0 0 0-12 0"></path>
        <circle cx="8" cy="9" r="4"></circle>
        <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path>
      </svg>
    ),
  },
  {
    label: "Foods",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
  },
  {
    label: "Energy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 5.636l3.536 3.536m0 5.656l-3.536 3.536M12 12h.01"></path>
      </svg>
    ),
  },
  {
    label: "Purchases",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2">
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
    ),
  },
];

export default function AddActivityPage() {
  const [activeTab, setActiveTab] = useState("Transport");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-gray-50">
      {/* Main Content */}
      <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Card className="border-none shadow-2xl bg-white">
          <CardHeader>
            <CardTitle>Add New Activity</CardTitle>
            <CardDescription>
              Log your daily activities to track your carbon footprint
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Activity Tabs */}
            <div className="flex border-b border-gray-200">
              {navButtons.map((btn) => (
                <button
                  onClick={() => setActiveTab(btn.label)}
                  key={btn.label}
                  className={`flex-1 py-2 px-4 flex items-center justify-center ${
                    btn.label === activeTab
                      ? "border-b-2 border-emerald-500 font-medium text-emerald-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}>
                  {btn.icon} {btn.label}
                </button>
              ))}
            </div>

            {/* Transport Form (active tab) */}
            {activeTab === "Transport" && <TransportForm />}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
