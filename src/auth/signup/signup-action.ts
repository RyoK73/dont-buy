"use server";
import { signUpNewUser } from "@/auth/signup/signup";
import { redirect } from "next/navigation";

type FormState = { error: string } | undefined;

const signUpAction = async (
  _: FormState,
  formData: FormData,
): Promise<FormState> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const { data, error } = await signUpNewUser(email, password);

  // エラー通知用
  if (error) {
    return { error: error.message };
  }

  // ユーザーがメール認証しているかどうかで分岐
  if (data.session) {
    redirect("/dont-buy");
  } else {
    redirect("/signup/confirm");
  }
};

export { signUpAction };
