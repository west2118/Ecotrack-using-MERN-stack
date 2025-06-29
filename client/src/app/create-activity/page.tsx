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

export default function AddActivityPage() {
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
          <Button variant="ghost">Cancel</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Add New Activity</CardTitle>
            <CardDescription>
              Log your daily activities to track your carbon footprint
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Category Selection */}
            <div className="space-y-2">
              <Label>Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transport">
                    <div className="flex items-center">
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
                      Transport
                    </div>
                  </SelectItem>
                  <SelectItem value="diet">
                    <div className="flex items-center">
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
                      Diet
                    </div>
                  </SelectItem>
                  <SelectItem value="energy">
                    <div className="flex items-center">
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
                      Energy Use
                    </div>
                  </SelectItem>
                  <SelectItem value="purchases">
                    <div className="flex items-center">
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
                      Purchases
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Activity Selection */}
            <div className="space-y-2">
              <Label>Activity</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an activity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="car">
                    <div className="flex items-center">
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
                      Drove car (gasoline)
                    </div>
                  </SelectItem>
                  <SelectItem value="distance">
                    <div className="flex items-center">
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
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      Distance (km)
                    </div>
                  </SelectItem>
                  <SelectItem value="train">
                    <div className="flex items-center">
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
                        <path d="M2 12h5"></path>
                        <path d="M19 12h5"></path>
                        <path d="M12 2v5"></path>
                        <path d="M12 19v5"></path>
                      </svg>
                      Took train
                    </div>
                  </SelectItem>
                  <SelectItem value="bus">
                    <div className="flex items-center">
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
                        <rect x="4" y="3" width="16" height="16" rx="2"></rect>
                        <line x1="4" y1="8" x2="20" y2="8"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="16" x2="20" y2="16"></line>
                      </svg>
                      Took bus
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Activity Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Distance (km)</Label>
                <Input type="number" placeholder="10" value="15" />
              </div>
              <div className="space-y-2">
                <Label>Estimated CO₂</Label>
                <div className="flex items-center h-10 px-3 py-2 text-sm border rounded-md bg-gray-50">
                  3.45 kg
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label>Notes (optional)</Label>
              <Textarea
                placeholder="Add any details about this activity..."
                value="Commute to work in the morning"
              />
            </div>

            {/* Date/Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <div className="flex items-center h-10 px-3 py-2 text-sm border rounded-md bg-gray-50">
                  June 15, 2025
                </div>
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <div className="flex items-center h-10 px-3 py-2 text-sm border rounded-md bg-gray-50">
                  08:30 AM
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Log Activity
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
