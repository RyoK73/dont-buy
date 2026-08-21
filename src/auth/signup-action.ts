"use server";
import { signUpNewUser } from "@/auth/signup";
import { redirect } from "next/navigation";

const signUpAction = async (email: string, password: string) => {
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
