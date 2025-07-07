// app/challenges/page.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Leaf,
  Bike,
  Salad,
  Plug,
  Recycle,
  Trophy,
  Calendar,
  Flag,
  Check,
  X,
  ChevronRight,
  BarChart2,
  Award,
} from "lucide-react";

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50 p-6">
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <Trophy className="h-8 w-8 text-green-600" />
          <div>
            <h1 className="text-3xl font-bold text-green-800">
              Eco Challenges
            </h1>
            <p className="text-gray-600">
              Earn rewards while saving the planet
            </p>
          </div>
        </div>
      </header>

      {/* Challenge Categories */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Flag className="h-5 w-5 text-gray-500" />
          <span>Challenge Categories</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            variant="outline"
            className="h-24 flex flex-col gap-2 hover:bg-green-50 border-gray-200">
            <div className="bg-green-100 p-2 rounded-full">
              <Bike className="h-5 w-5" />
            </div>
            <span>Transport</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col gap-2 hover:bg-green-50 border-gray-200">
            <div className="bg-green-100 p-2 rounded-full">
              <Salad className="h-5 w-5" />
            </div>
            <span>Food</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col gap-2 hover:bg-green-50 border-gray-200">
            <div className="bg-green-100 p-2 rounded-full">
              <Plug className="h-5 w-5" />
            </div>
            <span>Energy</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col gap-2 hover:bg-green-50 border-gray-200">
            <div className="bg-green-100 p-2 rounded-full">
              <Recycle className="h-5 w-5" />
            </div>
            <span>Waste</span>
          </Button>
        </div>
      </section>

      {/* Challenge Cards */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-gray-500" />
          <span>Available Challenges</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Challenge Card 1 - Joined Challenge */}
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Bike className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <CardTitle>Bike to Work Week</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4" />7 days • Medium
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-green-700">
                  <Leaf className="h-4 w-4" />
                  <span>Save 8.5 kg CO₂</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600">
                  <Trophy className="h-4 w-4" />
                  <span>150 EcoPoints</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">3 days remaining</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Check className="h-4 w-4" />
                    Check-in
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 gap-1">
                    <X className="h-4 w-4" />
                    Leave
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenge Card 2 - Not Joined */}
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Salad className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <CardTitle>Meat-Free Challenge</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4" />
                  30 days • Hard
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-green-700">
                  <Leaf className="h-4 w-4" />
                  <span>Save 30 kg CO₂</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600">
                  <Trophy className="h-4 w-4" />
                  <span>500 EcoPoints</span>
                </div>
              </div>

              <Button variant="default" className="w-full mt-2 gap-2">
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Challenge Card 3 */}
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Plug className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <CardTitle>Energy Saver Week</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4" />7 days • Easy
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-green-700">
                  <Leaf className="h-4 w-4" />
                  <span>Save 5.2 kg CO₂</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600">
                  <Trophy className="h-4 w-4" />
                  <span>100 EcoPoints</span>
                </div>
              </div>

              <Button variant="default" className="w-full mt-2 gap-2">
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
