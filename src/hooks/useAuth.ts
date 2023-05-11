import { env } from "@/env.mjs";
import { useSession } from "next-auth/react";

export function useAuth() {
  const { data, status } = useSession();

  if (status === "unauthenticated" || !data?.user) {
    return false;
  }

  const email = data.user.email;

  if (email && email !== env.NEXT_PUBLIC_WHITELIST_EMAIL) {
    return false;
  }

  return true;
}
