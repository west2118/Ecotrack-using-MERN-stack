import { Button } from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";

export default function MyLogsPage() {
  // Fake data for logs
  const logs = [
    {
      id: 1,
      date: "2025-06-15",
      time: "08:30",
      category: "Transport",
      activity: "Drove car (gasoline)",
      details: "15 km",
      co2: "3.45 kg",
      notes: "Commute to work",
    },
    {
      id: 2,
      date: "2025-06-14",
      time: "19:15",
      category: "Diet",
      activity: "Beef meal",
      details: "200g",
      co2: "2.8 kg",
      notes: "Dinner at steakhouse",
    },
    {
      id: 3,
      date: "2025-06-14",
      time: "12:00",
      category: "Transport",
      activity: "Took train",
      details: "20 km",
      co2: "0.4 kg",
      notes: "Lunch meeting downtown",
    },
    {
      id: 4,
      date: "2025-06-13",
      time: "10:00",
      category: "Energy Use",
      activity: "Air conditioning",
      details: "3 hours",
      co2: "1.2 kg",
      notes: "Home office",
    },
    {
      id: 5,
      date: "2025-06-12",
      time: "18:45",
      category: "Purchases",
      activity: "Plastic packaging",
      details: "3 items",
      co2: "0.75 kg",
      notes: "Grocery shopping",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-50">
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
                  {logs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>
                        <div className="font-medium">{log.date}</div>
                        <div className="text-sm text-gray-600">{log.time}</div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            log.category === "Transport"
                              ? "default"
                              : log.category === "Diet"
                              ? "secondary"
                              : log.category === "Energy Use"
                              ? "outline"
                              : "default"
                          }>
                          {log.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        {log.activity}
                      </TableCell>
                      <TableCell>{log.details}</TableCell>
                      <TableCell className="font-bold">{log.co2}</TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {log.notes}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                          </Button>
                          <Button variant="ghost" size="sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
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
