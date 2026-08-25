"use server";
import { signOut } from "@/auth/signio/signout";
import { redirect } from "next/navigation";

const signOutAction = async (): Promise<{ error: string } | undefined> => {
  const error = await signOut();
  if (error) return { error };
  redirect("/signin");
};

export { signOutAction };
