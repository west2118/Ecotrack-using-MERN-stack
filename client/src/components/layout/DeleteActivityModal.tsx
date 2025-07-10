import { Loader, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import ReactDOM from "react-dom";
import { useEffect } from "react";

type DeleteActivityModalProps = {
  isModalOpen: boolean;
  isCloseModal: () => void;
  handleDeleteActivity: () => void;
  isLoading: boolean;
};

export function DeleteActivityModal({
  isModalOpen,
  isCloseModal,
  handleDeleteActivity,
  isLoading,
}: DeleteActivityModalProps) {
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      onClick={isCloseModal}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 border-none">
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl">
        <Card className="w-full max-w-md">
          <CardHeader className="border-b border-borde border-emerald-600">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Delete Activity</CardTitle>
              <button
                disabled={isLoading}
                onClick={isCloseModal}
                type="button"
                className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <CardDescription>This action cannot be undone</CardDescription>
          </CardHeader>

          <CardContent className="py-6">
            <div className="flex items-start gap-4">
              <div className="mt-0.5">
                <svg
                  className="h-5 w-5 text-destructive"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground">
                  Are you sure you want to delete this activity? All data
                  associated with this activity will be permanently removed.
                </p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-4 border-t border-border border-emerald-600">
            <Button
              disabled={isLoading}
              onClick={isCloseModal}
              type="button"
              variant="outline">
              Cancel
            </Button>
            <Button
              onClick={handleDeleteActivity}
              disabled={isLoading}
              className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300">
              {isLoading ? <Loader className="animate-spin h-5 w-5" /> : ""}
              Delete Activity
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>,
    modalRoot
  );
}

const resultArray = [
  {
    motivational:
      "Great progress this week! Your decision to take the train twice instead of driving saved approximately 2.1kg of CO₂. Small changes like this add up to make a big difference for our planet!",
  },
  {
    title: "Transport",
    tip: "Try biking to work just once a week. Based on your 15km commute, this could save ~3kg CO₂ weekly. Consider routes along Main St and 5th Ave which have bike lanes.",
    potentialSavings: "12kg/month",
  },
];
