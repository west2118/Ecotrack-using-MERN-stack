"use client";

import { Leaf } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { useUserStore } from "@/stores/useUserStore";

const Navbar = () => {
  const user = useUserStore((state) => state.user);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-green-600" />
          <span className="text-lg font-semibold text-green-800">EcoTrack</span>
        </div>
        <div className="flex items-center gap-2">
          {user ? (
            <Avatar className="h-8 w-8">
              <AvatarImage />
              <AvatarFallback className="bg-emerald-600 text-white">
                {`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
              </AvatarFallback>
            </Avatar>
          ) : (
            <>
              <Link
                href="/signin"
                className="inline-block text-green-700 hover:bg-green-50 px-3 py-2 rounded">
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white text-sm font-medium">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
