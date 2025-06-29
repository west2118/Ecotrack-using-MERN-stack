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

export default function DashboardPage() {
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
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/user.jpg" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Impact Snapshot */}
            <Card>
              <CardHeader>
                <CardTitle>Your Daily Impact</CardTitle>
                <CardDescription>Wednesday, June 12, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2 p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <Label>Carbon Usage Today</Label>
                      <Badge variant="outline">Updated 1h ago</Badge>
                    </div>
                    <div className="flex items-end space-x-2">
                      <span className="text-4xl font-bold">8.2</span>
                      <span className="text-lg text-gray-600">kg CO₂</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      ↓ 1.3kg from yesterday
                    </p>
                  </div>
                  <div className="space-y-2 p-4 border rounded-lg">
                    <Label>Weekly Goal Progress</Label>
                    <div className="flex items-end space-x-2">
                      <span className="text-4xl font-bold">63</span>
                      <span className="text-lg text-gray-600">%</span>
                    </div>
                    <Progress value={63} className="h-2 mt-2" />
                    <p className="text-sm text-gray-600">
                      3.7kg remaining to hit weekly target
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Log Shortcuts */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Log</CardTitle>
                <CardDescription>
                  Log common activities with one tap
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <Button variant="outline" className="h-24 flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2 text-emerald-600">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    Ate Meat
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2 text-emerald-600">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    Vegan Meal
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2 text-emerald-600">
                      <path d="M12 2v4"></path>
                      <path d="m16.24 7.76 2.83-2.83"></path>
                      <path d="M18 12h4"></path>
                      <path d="m16.24 16.24 2.83 2.83"></path>
                      <path d="M12 18v4"></path>
                      <path d="m7.76 16.24-2.83 2.83"></path>
                      <path d="M6 12H2"></path>
                      <path d="m7.76 7.76-2.83-2.83"></path>
                    </svg>
                    Used AC
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2 text-emerald-600">
                      <path d="M12 2v4"></path>
                      <path d="m16.24 7.76 2.83-2.83"></path>
                      <path d="M18 12h4"></path>
                      <path d="m16.24 16.24 2.83 2.83"></path>
                      <path d="M12 18v4"></path>
                      <path d="m7.76 16.24-2.83 2.83"></path>
                      <path d="M6 12H2"></path>
                      <path d="m7.76 7.76-2.83-2.83"></path>
                    </svg>
                    Used Fan
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2 text-emerald-600">
                      <path d="M14 19a6 6 0 0 0-12 0"></path>
                      <circle cx="8" cy="9" r="4"></circle>
                      <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path>
                    </svg>
                    Drove Car
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2 text-emerald-600">
                      <path d="M2 12h5"></path>
                      <path d="M19 12h5"></path>
                      <path d="M12 2v5"></path>
                      <path d="M12 19v5"></path>
                    </svg>
                    Took Train
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2 text-emerald-600">
                      <path d="M12 2v4"></path>
                      <path d="m16.24 7.76 2.83-2.83"></path>
                      <path d="M18 12h4"></path>
                      <path d="m16.24 16.24 2.83 2.83"></path>
                      <path d="M12 18v4"></path>
                      <path d="m7.76 16.24-2.83 2.83"></path>
                      <path d="M6 12H2"></path>
                      <path d="m7.76 7.76-2.83-2.83"></path>
                    </svg>
                    Plastic Waste
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2 text-emerald-600">
                      <path d="M12 2v4"></path>
                      <path d="m16.24 7.76 2.83-2.83"></path>
                      <path d="M18 12h4"></path>
                      <path d="m16.24 16.24 2.83 2.83"></path>
                      <path d="M12 18v4"></path>
                      <path d="m7.76 16.24-2.83 2.83"></path>
                      <path d="M6 12H2"></path>
                      <path d="m7.76 7.76-2.83-2.83"></path>
                    </svg>
                    Recycled
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* AI Tip of the Day */}
            <Card>
              <CardHeader>
                <CardTitle>AI Sustainability Tip</CardTitle>
                <CardDescription>Powered by OpenAI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <p className="text-gray-700">
                    "Try meatless Mondays! Replacing beef with plant-based
                    proteins just one day a week can reduce your annual carbon
                    footprint by about 5%. Start small with lentil chili or
                    mushroom burgers."
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
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
                      strokeLinejoin="round"
                      className="mr-1">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    More Tips
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Card */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-24 flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-2 text-emerald-600">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  My Logs
                </Button>
                <Button variant="outline" className="h-24 flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-2 text-emerald-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                  Suggestions
                </Button>
                <Button variant="outline" className="h-24 flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-2 text-emerald-600">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  Challenges
                </Button>
                <Button variant="outline" className="h-24 flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-2 text-emerald-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                  Leaderboard
                </Button>
                <Button variant="outline" className="h-24 flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-2 text-emerald-600">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
