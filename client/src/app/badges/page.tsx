// app/challenges/page.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function ChallengesPage() {
  // Fake data
  const activeChallenges = [
    {
      id: 1,
      title: "Go Meat-Free for 3 Days",
      description: "Reduce your carbon footprint by avoiding meat for 3 days",
      progress: 2,
      target: 3,
      points: 150,
      category: "Diet",
    },
    {
      id: 2,
      title: "Commute Green This Week",
      description: "Use public transport, bike, or walk for all your commutes",
      progress: 3,
      target: 5,
      points: 200,
      category: "Transport",
    },
    {
      id: 3,
      title: "Reduce Energy Consumption",
      description: "Cut your electricity usage by 20% this week",
      progress: 15,
      target: 20,
      points: 180,
      category: "Energy",
    },
  ];

  const completedChallenges = [
    {
      id: 4,
      title: "Plastic-Free Day",
      description: "Avoid single-use plastics for a full day",
      completedDate: "2025-06-25",
      points: 100,
      category: "Lifestyle",
    },
    {
      id: 5,
      title: "Local Produce Week",
      description: "Only consume locally sourced food for a week",
      completedDate: "2025-06-18",
      points: 250,
      category: "Diet",
    },
  ];

  const earnedBadges = [
    {
      id: 1,
      name: "Green Starter",
      description: "Completed your first challenge",
      icon: "🌱",
      earnedDate: "2025-06-10",
    },
    {
      id: 2,
      name: "Eco Warrior",
      description: "Completed 5 challenges",
      icon: "♻️",
      earnedDate: "2025-06-20",
    },
    {
      id: 3,
      name: "Carbon Saver",
      description: "Reduced your footprint by 10%",
      icon: "🌍",
      earnedDate: "2025-06-22",
    },
  ];

  const upcomingBadges = [
    {
      id: 4,
      name: "Sustainability Master",
      description: "Complete 15 challenges",
      icon: "🏆",
      progress: 8,
      target: 15,
    },
    {
      id: 5,
      name: "Zero Waste Hero",
      description: "Go plastic-free for 7 days",
      icon: "🚯",
      progress: 3,
      target: 7,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Challenges & Badges
        </h1>
        <p className="text-gray-600">
          Complete challenges to earn points and badges, and track your
          sustainability journey!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-700">Current Streak</CardTitle>
            <CardDescription>
              Days actively participating in challenges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-green-700">7</span>
              <span className="text-gray-600">days</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Keep it up! 3 more days for a new badge.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-700">Total Points</CardTitle>
            <CardDescription>Your sustainability score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-blue-700">1,250</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Top 15%
              </Badge>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              You're doing better than 85% of users!
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Active Challenges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeChallenges.map((challenge) => (
            <Card key={challenge.id}>
              <CardHeader>
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
                <Badge variant="outline" className="mt-2 w-fit">
                  {challenge.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>
                      Progress: {challenge.progress}/{challenge.target}
                    </span>
                    <span>{challenge.points} pts</span>
                  </div>
                  <Progress
                    value={(challenge.progress / challenge.target) * 100}
                    className="h-2"
                  />
                </div>
                <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors">
                  Log Progress
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Completed Challenges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {completedChallenges.map((challenge) => (
            <Card key={challenge.id} className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700">
                    +{challenge.points} pts
                  </Badge>
                </div>
                <Badge variant="outline" className="mt-2 w-fit">
                  {challenge.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Completed on {challenge.completedDate}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Your Badges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {earnedBadges.map((badge) => (
            <Card key={badge.id} className="text-center">
              <CardHeader>
                <div className="text-5xl mb-2">{badge.icon}</div>
                <CardTitle>{badge.name}</CardTitle>
                <CardDescription>{badge.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Earned on {badge.earnedDate}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Upcoming Badges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingBadges.map((badge) => (
            <Card key={badge.id}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{badge.icon}</span>
                  <div>
                    <CardTitle>{badge.name}</CardTitle>
                    <CardDescription>{badge.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>
                      Progress: {badge.progress}/{badge.target}
                    </span>
                  </div>
                  <Progress
                    value={(badge.progress / badge.target) * 100}
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
