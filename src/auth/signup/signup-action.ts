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

  // email,passwordが空白の場合(input経由外の対策)
  if (!email || !password) return { error: "EmailまたはPasswordが必要です" };

  const { data, error } = await signUpNewUser(email, password);

  // 登録済みのメールアドレスの場合
  if (data.user?.identities?.length === 0) {
    return { error: "このメールアドレスは既に登録されています" };
  } else if (error) {
    return { error: error.message };
  }

  // ユーザーがメール認証しているかどうかで分岐
  if (data.session) {
    redirect("/dont-buy");
  } else {
    redirect("/signup/confirm");
  }
};

export { signUpAction, type FormState };
