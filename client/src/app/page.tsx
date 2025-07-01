// app/page.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Leaf,
  Activity,
  Lightbulb,
  Trophy,
  Users,
  BarChart2,
  Target,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-20">
          <div className="container mx-auto px-5">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Sustainable Living Made Simple
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Track & Reduce Your{" "}
                  <span className="text-green-600">Carbon Footprint</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-[540px]">
                  EcoTrack helps you understand and minimize your environmental
                  impact through data-driven insights and achievable challenges.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row pt-1">
                  <Button className="bg-green-600 hover:bg-green-700 h-12 px-6 text-white">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 px-6 border-gray-300 text-gray-700 hover:bg-gray-50">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-end mt-6 lg:mt-0">
                <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-inner flex items-center justify-center">
                  <div className="absolute inset-0 bg-[size:24px_24px] opacity-10"></div>
                  <Leaf className="h-32 w-32 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-14 bg-gray-50">
          <div className="container mx-auto px-5">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sustainable Living Features
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to make meaningful environmental changes
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Activity,
                  title: "Carbon Tracking",
                  desc: "Monitor daily activities and their environmental impact",
                },
                {
                  icon: Lightbulb,
                  title: "AI Suggestions",
                  desc: "Personalized recommendations to reduce your footprint",
                },
                {
                  icon: Trophy,
                  title: "Eco Challenges",
                  desc: "Earn badges by completing sustainability goals",
                },
                {
                  icon: Users,
                  title: "Community",
                  desc: "Compare progress with friends and groups",
                },
                {
                  icon: BarChart2,
                  title: "Progress Reports",
                  desc: "Visualize your impact over time",
                },
                {
                  icon: Target,
                  title: "Custom Goals",
                  desc: "Set and track personal sustainability targets",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-50 mb-3">
                      <feature.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-gray-900">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {feature.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-14">
          <div className="container mx-auto px-5">
            <div className="mx-auto max-w-4xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Eco-Conscious Individuals
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands already reducing their environmental impact
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  name: "Sarah K.",
                  role: "Environmental Scientist",
                  quote:
                    "EcoTrack transformed how I approach sustainability. The data visualization makes complex environmental concepts accessible.",
                },
                {
                  name: "Michael T.",
                  role: "Urban Planner",
                  quote:
                    "The challenges gamify sustainability in a way that's actually motivating. My team competes to earn badges each month.",
                },
                {
                  name: "Priya M.",
                  role: "Sustainability Educator",
                  quote:
                    "I recommend EcoTrack to all my students. It makes abstract environmental concepts tangible and actionable.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-14 bg-green-600">
          <div className="container mx-auto px-5">
            <div className="mx-auto max-w-4xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to make a difference?
              </h2>
              <p className="text-lg text-green-100">
                Join our community of environmentally conscious individuals
                today.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <Button className="bg-white text-green-700 hover:bg-green-50 h-12 px-8">
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-8 border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-50">
        <div className="container mx-auto px-5 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <span className="text-lg font-semibold text-green-800">
                EcoTrack
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-600">
              <a href="#" className="hover:text-green-600">
                About
              </a>
              <a href="#" className="hover:text-green-600">
                Features
              </a>
              <a href="#" className="hover:text-green-600">
                Pricing
              </a>
              <a href="#" className="hover:text-green-600">
                Blog
              </a>
              <a href="#" className="hover:text-green-600">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2025 EcoTrack. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
