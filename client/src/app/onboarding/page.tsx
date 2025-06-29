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
import { Progress } from "@/components/ui/progress";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-emerald-600">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5 3.87 4 4 0 0 0-5-5 4 4 0 0 1 3.87-5z"></path>
            </svg>
            <span className="font-bold text-emerald-600">EcoTrack</span>
          </div>
          <Progress value={66} className="w-[200px] h-2" />
        </div>
      </header>

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
              <CardTitle>Step 1: Your Location</CardTitle>
              <CardDescription>
                Carbon impact varies by region - select yours for accurate
                calculations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Region/State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="California" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                      <SelectItem value="fl">Florida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sustainability Goals Card */}
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Set Your Goals</CardTitle>
              <CardDescription>
                What would you like to achieve with EcoTrack?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Main Sustainability Goal</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary goal" />
                  </SelectTrigger>
                  <SelectContent>
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
                  <SelectTrigger>
                    <SelectValue placeholder="Moderate (10% reduction)" />
                  </SelectTrigger>
                  <SelectContent>
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

          {/* Tracking Preferences Card */}
          <Card>
            <CardHeader>
              <CardTitle>Step 3: Tracking Preferences</CardTitle>
              <CardDescription>
                Select which lifestyle categories you want to track
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center space-x-3 p-4 border rounded-lg">
                  <Checkbox id="transport" checked />
                  <div className="space-y-1">
                    <Label htmlFor="transport">Transportation</Label>
                    <p className="text-sm text-gray-600">
                      Commute, flights, vehicle usage
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 border rounded-lg">
                  <Checkbox id="diet" checked />
                  <div className="space-y-1">
                    <Label htmlFor="diet">Diet</Label>
                    <p className="text-sm text-gray-600">
                      Food choices, meal types
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 border rounded-lg">
                  <Checkbox id="energy" checked />
                  <div className="space-y-1">
                    <Label htmlFor="energy">Energy Use</Label>
                    <p className="text-sm text-gray-600">
                      Electricity, heating, appliances
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 border rounded-lg">
                  <Checkbox id="purchases" />
                  <div className="space-y-1">
                    <Label htmlFor="purchases">Purchases</Label>
                    <p className="text-sm text-gray-600">
                      Shopping habits, packaging
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Back</Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Complete Setup
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
