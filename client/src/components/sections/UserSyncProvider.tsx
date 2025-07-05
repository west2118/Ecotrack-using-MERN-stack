// app/_components/UserSyncProvider.tsx
"use client";

import { useSyncFirebaseUserInfo } from "@/hooks/useSyncFirebaseUserInfo";

export const UserSyncProvider = () => {
  useSyncFirebaseUserInfo();
  return null;
};
