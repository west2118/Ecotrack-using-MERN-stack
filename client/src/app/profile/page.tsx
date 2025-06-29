// app/settings/page.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Settings & Profile
        </h1>
        <p className="text-gray-600">
          Manage your account, preferences, and sustainability goals
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Alex Johnson" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="alex.johnson@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Update Profile</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="notifications">Email Notifications</Label>
                <Switch id="notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <Switch id="dark-mode" />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="weekly-report">Weekly Report</Label>
                <Switch id="weekly-report" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Column - Sustainability Goals */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sustainability Goals</CardTitle>
              <CardDescription>Set your personal targets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Carbon Footprint Reduction</Label>
                <div className="flex items-center gap-4 mt-2">
                  <Progress value={65} className="h-2 flex-1" />
                  <span className="text-sm text-gray-600">65% of 30% goal</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transport-goal">Transportation Goal</Label>
                <Select defaultValue="reduce">
                  <SelectTrigger>
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reduce">
                      Reduce car usage by 50%
                    </SelectItem>
                    <SelectItem value="eliminate">
                      Eliminate car usage
                    </SelectItem>
                    <SelectItem value="public">
                      Use only public transport
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="diet-goal">Diet Goal</Label>
                <Select defaultValue="vegetarian">
                  <SelectTrigger>
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reduce-meat">
                      Reduce meat consumption
                    </SelectItem>
                    <SelectItem value="vegetarian">Vegetarian diet</SelectItem>
                    <SelectItem value="vegan">Vegan diet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="energy-goal">Energy Reduction Goal</Label>
                <Select defaultValue="20">
                  <SelectTrigger>
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">Reduce by 10%</SelectItem>
                    <SelectItem value="20">Reduce by 20%</SelectItem>
                    <SelectItem value="30">Reduce by 30%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Update Goals</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right Column - Data Management */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Export</CardTitle>
              <CardDescription>
                Download your sustainability data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Export your personal impact report as a PDF document containing
                your carbon footprint history, achievements, and progress.
              </p>
              <div className="space-y-2">
                <Label htmlFor="time-range">Time Range</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Last Month</SelectItem>
                    <SelectItem value="quarter">Last 3 Months</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Download PDF Report
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">Danger Zone</CardTitle>
              <CardDescription>Permanent actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  Delete your account and all associated data. This action
                  cannot be undone.
                </p>
                <Button variant="destructive" className="w-full">
                  Delete My Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
