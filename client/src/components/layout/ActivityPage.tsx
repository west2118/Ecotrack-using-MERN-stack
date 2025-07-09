"use client";

import DynamicActivityForm from "@/components/layout/DynamicActivityForm";
import ElectricityForm from "@/components/layout/EletricityForm";
import FoodForm from "@/components/layout/FoodForm";
import PurchasesForm from "@/components/layout/PurchasesForm";
import TransportForm from "@/components/layout/TransportForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import useFetchData from "@/hooks/useFetchData";
import { useUserStore } from "@/stores/useUserStore";
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
    label: "Electricity",
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

export default function ActivityPage({ mode }: { mode: string }) {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = useUserStore((state) => state.userToken);

  const contentFromUrl = searchParams.get("content") || "";

  const [itemToEdit, setItemToEdit] = useState<Activity | undefined>(undefined);
  const [categoryFromUrl, setCategoryFromUrl] = useState(
    searchParams.get("category") || "Transport"
  );
  const [activeTab, setActiveTab] = useState(categoryFromUrl);
  // const { items, loading, error, fetchData } = useFetchData<Activity>();

  const isEditableTab = [
    "Transport",
    "Electricity",
    "Foods",
    "Purchases",
  ].includes(activeTab);
  const shouldRenderForm = mode === "create" || itemToEdit;

  useEffect(() => {
    if (!token || !id) return;

    const category = searchParams.get("category");

    const fetchData = async () => {
      try {
        const response = await axios.post(
          `/api/act/getAct`,
          { actId: id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data?.act) {
          setItemToEdit(response?.data?.act);
          setActiveTab(response?.data?.act.category);
          setCategoryFromUrl(response?.data?.act.category);
        }
      } catch (error: any) {
        toast.error(error.response?.data?.message || error.message);
      }
    };

    fetchData();
  }, [token, id]);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setCategoryFromUrl(category);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-gray-50">
      {/* Main Content */}
      <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Card className="border-none shadow-2xl bg-white">
          <CardHeader>
            <CardTitle>
              {mode === "edit" ? "Edit Activity" : "Add New Activity"}
            </CardTitle>
            <CardDescription>
              Log your daily activities to track your carbon footprint
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Activity Tabs */}
            <div className="flex border-b border-gray-200">
              {navButtons.map((btn) => (
                <button
                  onClick={() => {
                    setActiveTab(btn.label);
                    router.push(`/activity/create?category=${btn.label}`);
                  }}
                  disabled={mode === "edit"}
                  key={btn.label}
                  className={`flex-1 py-2 px-4 flex items-center justify-center ${
                    btn.label === activeTab
                      ? "border-b-2 border-emerald-500 font-medium text-emerald-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}>
                  {btn.icon}{" "}
                  {`${btn.label.charAt(0).toUpperCase()}${btn.label.slice(1)}`}
                </button>
              ))}
            </div>

            {isEditableTab && shouldRenderForm && (
              <DynamicActivityForm
                category={categoryFromUrl}
                content={contentFromUrl}
                activity={itemToEdit}
                mode={mode}
              />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
