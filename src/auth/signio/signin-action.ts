"use server";
import { signInWithEmail } from "@/auth/signio/signin";
import { redirect } from "next/navigation";

type FormState = { error: string } | undefined;

const signInAction = async (
  _: FormState,
  formData: FormData,
): Promise<FormState> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await signInWithEmail(email, password);

  if (error) return { error: error.message };

  // 未登録の場合のリダイレクト
  if (data.session) {
    redirect("/singup");
  } else {
    // 正常時のリダイレクト
    redirect("/dont-buy");
  }
};

export { signInAction };
