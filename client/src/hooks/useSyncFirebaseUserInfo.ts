import { auth } from "@/lib/firebase";
import { useUserStore } from "@/stores/useUserStore";
import { useEffect } from "react";

export const useSyncFirebaseUserInfo = () => {
  const setToken = useUserStore((state) => state.setUserToken);

  useEffect(() => {
    const fetchInitialToken = async () => {
      const currentToken = await auth.currentUser?.getIdToken();
      setToken(currentToken ?? null);
    };

    fetchInitialToken();

    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      const newToken = await user?.getIdToken();
      setToken(newToken ?? null);
    });

    return () => unsubscribe();
  }, [setToken]);
};
