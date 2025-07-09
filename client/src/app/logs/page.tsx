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
import TotalSummaryCard from "@/components/layout/TotalSummaryCard";
import Pagination from "@/components/layout/Pagination";

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

const itemsPerPage = 10;

export default function MyLogsPage() {
  const token = useUserStore((state) => state.userToken);
  const router = useRouter();
  const [dateFilter, setDateFilter] = useState("week");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { items, loading, error, fetchData } = useFetchData<Activity>();

  useEffect(() => {
    if (!token) return;

    fetchData("/api/act/getUserAct", token);
  }, [token]);

  const totalCO2 = items.reduce((sum, item) => sum + item.CO2, 0);

  const filteredItems = items.filter((item) => {
    const matchCategory =
      categoryFilter === "all" || item.category === categoryFilter;

    const matchSearch =
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.note.toLowerCase().includes(searchTerm.toLowerCase());

    const createdAt = new Date(item.createdAt);
    const now = new Date();

    let matchDate = true;
    if (dateFilter === "today") {
      matchDate = createdAt.toDateString() === new Date().toDateString();
    } else if (dateFilter === "week") {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(now.getDate() - 7);
      matchDate = createdAt >= sevenDaysAgo;
    } else if (dateFilter === "month") {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(now.getDate() - 30);
      matchDate = createdAt >= thirtyDaysAgo;
    }

    return matchCategory && matchSearch && matchDate;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
                  <Select onValueChange={(value) => setDateFilter(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Last 7 days" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">Last 7 days</SelectItem>
                      <SelectItem value="month">Last 30 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select onValueChange={(value) => setCategoryFilter(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="all">All categories</SelectItem>
                      <SelectItem value="Transport">Transport</SelectItem>
                      <SelectItem value="Foods">Foods</SelectItem>
                      <SelectItem value="Energy Use">Energy Use</SelectItem>
                      <SelectItem value="Purchases">Purchases</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Search</Label>
                  <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search activities..."
                  />
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
                  Total CO₂:{" "}
                  <span className="font-bold">{totalCO2.toFixed(2)} kg</span>
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
                  ) : filteredItems.length > 0 ? (
                    paginatedItems.map((act) => (
                      <UserTableAct key={act._id} act={act} />
                    ))
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

              {!loading && filteredItems.length > 0 && (
                <Pagination
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              )}
            </CardContent>
          </Card>

          {/* Summary Card */}
          <TotalSummaryCard items={items} totalCO2={totalCO2} />
        </div>
      </main>
    </div>
  );
}
