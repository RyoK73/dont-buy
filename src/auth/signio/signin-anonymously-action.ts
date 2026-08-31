"use server";
import { signInAnonymously } from "@/auth/signio/signin-anonymously";
import { redirect } from "next/navigation";

const signInAnonymouslyAction = async (): Promise<
  { error: string } | undefined
> => {
  const { data, error } = await signInAnonymously();

  if (error) return { error: error.message };

  redirect("/dont-buy");
};

export { signInAnonymouslyAction };
