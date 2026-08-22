"use server";
import { SignInAnonymously } from "@/auth/signio/signin-anonymously";
import { redirect } from "next/navigation";

const SignInAnonymouslyAction = async (): Promise<
  { error: string } | undefined
> => {
  const { data, error } = await SignInAnonymously();

  if (error) return { error: error.message };

  redirect("/dont-buy");
};

export { SignInAnonymouslyAction };
