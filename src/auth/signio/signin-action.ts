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

  // email,passwordが空白の場合(input経由外の対策)
  if (!email || !password) return { error: "EmailまたはPasswordが必要です" };

  const { data, error } = await signInWithEmail(email, password);

  if (error) return { error: error.message }; // メール認証が行われていない場合もエラーとなる

  // 正常時のリダイレクト
  redirect("/dont-buy");
};

export { type FormState, signInAction };
