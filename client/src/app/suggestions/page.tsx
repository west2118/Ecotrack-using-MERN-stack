import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

export default function AISuggestionsPage() {
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
          <Button variant="ghost">Refresh Tips</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Weekly Goals Review */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Goals Review</CardTitle>
              <CardDescription>
                How you're doing with your sustainability targets
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Carbon Reduction Goal</Label>
                  <Badge variant="outline">63% complete</Badge>
                </div>
                <Progress value={63} className="h-2" />
                <p className="text-sm text-gray-600">
                  You've reduced your carbon footprint by 3.2kg this week
                  (target: 5kg)
                </p>
              </div>

              <div className="space-y-2">
                <Label>Motivational Message</Label>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <p className="text-gray-700 italic">
                    "Great progress this week! Your decision to take the train
                    twice instead of driving saved approximately 2.1kg of CO₂.
                    Small changes like this add up to make a big difference for
                    our planet!"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personalized Reduction Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Personalized Reduction Tips</CardTitle>
              <CardDescription>
                AI-powered suggestions based on your activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
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
                        className="text-emerald-600">
                        <path d="M12 2v4"></path>
                        <path d="m16.24 7.76 2.83-2.83"></path>
                        <path d="M18 12h4"></path>
                        <path d="m16.24 16.24 2.83 2.83"></path>
                        <path d="M12 18v4"></path>
                        <path d="m7.76 16.24-2.83 2.83"></path>
                        <path d="M6 12H2"></path>
                        <path d="m7.76 7.76-2.83-2.83"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Transport Tip</h3>
                    <p className="text-gray-700">
                      "Try biking to work just once a week. Based on your 15km
                      commute, this could save ~3kg CO₂ weekly. Consider routes
                      along Main St and 5th Ave which have bike lanes."
                    </p>
                    <div className="mt-2">
                      <Badge variant="secondary">
                        Potential savings: 12kg/month
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
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
                        className="text-emerald-600">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Diet Tip</h3>
                    <p className="text-gray-700">
                      "Switch one beef meal per week to chicken or fish. Your
                      beef consumption accounts for 40% of your diet-related
                      emissions. This simple change could reduce your food
                      carbon footprint by 25%."
                    </p>
                    <div className="mt-2">
                      <Badge variant="secondary">
                        Potential savings: 4.8kg/month
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
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
                        className="text-emerald-600">
                        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 5.636l3.536 3.536m0 5.656l-3.536 3.536M12 12h.01"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Energy Tip</h3>
                    <p className="text-gray-700">
                      "Set your AC 1°C higher (e.g., 24°C instead of 23°C). Your
                      3 hours of daily AC use in summer could be 10% more
                      efficient, saving ~0.5kg CO₂ per week without noticeable
                      comfort change."
                    </p>
                    <div className="mt-2">
                      <Badge variant="secondary">
                        Potential savings: 2kg/month
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                More Suggestions
              </Button>
            </CardFooter>
          </Card>

          {/* Weekly Challenge */}
          <Card>
            <CardHeader>
              <CardTitle>This Week's Challenge</CardTitle>
              <CardDescription>
                Join others in this community challenge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-emerald-50 rounded-lg">
                <h3 className="font-medium mb-2">"Meatless Monday Plus"</h3>
                <p className="text-gray-700 mb-3">
                  Go meat-free for one day this week AND try a plant-based milk
                  alternative in your coffee/tea.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline">Current participants: 1,248</Badge>
                  <Badge variant="outline">Avg. savings: 3.2kg CO₂</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Learn More</Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Join Challenge
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
