"use client";

// app/sign-in/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@/hooks/useForm";
import { auth, provider } from "@/lib/firebase";
import axios from "axios";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Leaf, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type FormData = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const { formData, handleChange } = useForm<FormData>({
    email: "",
    password: "",
  });

  const handleLoginWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const token = await userCredential.user.getIdToken();

      const response = await axios.post("/api/auth/verify", {
        token,
        email: formData.email,
      });

      if (response?.data?.user?.firstName) {
        router.push("/dashboard");
      } else {
        router.push("/onboarding");
      }
      toast.success("Logged In Successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginWithGmail = async () => {
    setIsGoogleLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      const response = await axios.post("/api/auth/verify", { token });

      toast.success("Logged in successfully!");

      if (response?.data?.user?.firstName) {
        router.push("/dashboard");
      } else {
        router.push("/onboarding");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-5">
          <div className="mx-auto max-w-md">
            <div className="text-center mb-8">
              <div className="flex flex-col items-center justify-center mb-4">
                <Leaf className="h-12 w-12 text-green-600 mb-2" />
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
                  Welcome back
                </h1>
              </div>
              <p className="text-gray-600">
                Track your sustainability journey with us
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <form onSubmit={handleLoginWithEmail} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="focus-visible:ring-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="focus-visible:ring-green-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-green-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <div className="space-y-2">
                  <div className="text-sm flex items-center justify-between text-muted-foreground">
                    <p>Don't have an account?</p>{" "}
                    <Link
                      href="/signup"
                      className="text-green-600 hover:underline">
                      Sign Up
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-600 hover:bg-green-700 h-11 text-white">
                    {isLoading ? (
                      <Loader className="animate-spin h-5 w-5" />
                    ) : (
                      ""
                    )}
                    Sign In
                  </Button>
                </div>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <Button
                onClick={handleLoginWithGmail}
                disabled={isGoogleLoading}
                variant="outline"
                className="h-11 w-full">
                {isGoogleLoading ? (
                  <Loader className="animate-spin h-5 w-5" />
                ) : (
                  ""
                )}
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="#4285F4"
                  />
                </svg>
                Gmail Account
              </Button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-green-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-green-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 border-t border-gray-100">
        <div className="container px-5">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © 2025 EcoTrack. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-gray-700">
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-gray-700">
                Terms
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-500 hover:text-gray-700">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
