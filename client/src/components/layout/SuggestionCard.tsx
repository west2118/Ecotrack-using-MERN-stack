"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const SuggestionCard = () => {
  const [aiSuggestion, setAiSuggestion] = useState("");

  useEffect(() => {
    let called = false;

    const getSuggestion = async () => {
      if (called) return;
      called = true;

      try {
        const response = await axios.post("/api/ai/generateSuggestion", {
          prompt:
            "Give me a 1–2 sentence sustainability tip to reduce personal carbon footprint. Make it specific, friendly, and include a small action with a quick impact example.",
        });

        setAiSuggestion(response.data.suggestion);
      } catch (error: any) {
        console.error(error);
        toast.error(error.response?.data?.error || error.message);
      }
    };

    getSuggestion();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Sustainability Tip</CardTitle>
        <CardDescription>Powered by OpenAI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-emerald-50 rounded-lg">
          <p className="text-gray-700">{aiSuggestion}</p>
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
  );
};

export default SuggestionCard;
