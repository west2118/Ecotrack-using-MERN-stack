"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
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
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import useFetchData from "@/hooks/useFetchData";
import { useUserStore } from "@/stores/useUserStore";
import UserTableAct from "@/components/layout/UserTableAct";

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
};

export default function MyLogsPage() {
  const token = useUserStore((state) => state.userToken);
  const router = useRouter();
  const { items, loading, error, fetchData } = useFetchData<Activity>();

  useEffect(() => {
    if (!token) return;

    fetchData("/api/act/getUserAct", token);
  }, [token]);

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-50">
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-4">
          {/* Left Arrow Button */}
          <button
            onClick={() => router.push("/dashboard")}
            className="text-emerald-600 hover:text-emerald-800 transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        <div className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Filter Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Last 7 days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">Last 7 days</SelectItem>
                      <SelectItem value="month">Last 30 days</SelectItem>
                      <SelectItem value="custom">Custom range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All categories</SelectItem>
                      <SelectItem value="transport">Transport</SelectItem>
                      <SelectItem value="diet">Diet</SelectItem>
                      <SelectItem value="energy">Energy Use</SelectItem>
                      <SelectItem value="purchases">Purchases</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Search</Label>
                  <Input placeholder="Search activities..." />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Logs Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Activity History</CardTitle>
                  <CardDescription>
                    Your logged activities and carbon impact
                  </CardDescription>
                </div>
                <div className="text-sm text-gray-600">
                  Total CO₂: <span className="font-bold">8.6 kg</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date/Time</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Activity</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>CO₂</TableHead>
                    <TableHead>Notes</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={10}>
                        <div className="flex justify-center items-center h-20 w-full">
                          <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : items.length > 0 ? (
                    items.map((act) => <UserTableAct key={act._id} act={act} />)
                  ) : (
                    <TableRow>
                      <TableCell colSpan={10}>
                        <div className="text-center text-sm text-gray-500 py-10">
                          No logs found.
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="space-y-2 p-4 border rounded-lg">
                  <Label>Total CO₂</Label>
                  <div className="text-2xl font-bold">8.6 kg</div>
                  <div className="text-sm text-gray-600">
                    ↓ 1.4kg from last week
                  </div>
                </div>
                <div className="space-y-2 p-4 border rounded-lg">
                  <Label>Transport Impact</Label>
                  <div className="text-2xl font-bold">3.85 kg</div>
                  <div className="text-sm text-gray-600">45% of total</div>
                </div>
                <div className="space-y-2 p-4 border rounded-lg">
                  <Label>Diet Impact</Label>
                  <div className="text-2xl font-bold">2.8 kg</div>
                  <div className="text-sm text-gray-600">33% of total</div>
                </div>
                <div className="space-y-2 p-4 border rounded-lg">
                  <Label>Activities Logged</Label>
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-gray-600">1.2 per day</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
