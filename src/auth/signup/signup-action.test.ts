import { vi, it, describe, expect } from "vitest";
import { signUpAction } from "@/auth/signup/signup-action";
import { redirect } from "next/navigation";

vi.mock("@/auth/signup/signup", () => ({
  signUpNewUser: (email: string, password: string) => {
    type User = {
      info: { email: string; password: string };
      data: { session: boolean };
    };
    const users: User[] = [
      {
        info: { email: "test@example.com", password: "password123" },
        data: { session: true },
      },
      {
        info: { email: "exam@exmaple.com", password: "password987" },
        data: { session: false },
      },
    ];

    let error: { message: string } | null = null;
    let data = { session: false };
    const validUser: User | undefined = users.find(
      (user) => user.info.email === email && user.info.password === password,
    );
    if (!validUser) {
      error = { message: "user couldn't find" };
    } else {
      data = validUser.data;
    }

    return { data, error };
  },
}));
vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

describe("サインイン処理", () => {
  it("エラーがあればエラーメッセージオブジェクトを返す", async () => {
    const formData = new FormData();
    formData.append("email", "invalid@example.com");
    formData.append("password", "invalid@example.com");
    expect(await signUpAction(undefined, formData)).toEqual({
      error: "user couldn't find",
    });
  });
  it("data.sessionがなければ/signupへリダイレクトする", async () => {
    const formData = new FormData();
    formData.append("email", "exam@exmaple.com");
    formData.append("password", "password987");
    await signUpAction(undefined, formData);
    expect(redirect).toHaveBeenCalledWith("/signup/confirm");
  });
  it("data.sessionがあれば/dont-buyへリダイレクトする", async () => {
    const formData = new FormData();
    formData.append("email", "test@example.com");
    formData.append("password", "password123");
    await signUpAction(undefined, formData);
    expect(redirect).toHaveBeenCalledWith("/dont-buy");
  });
});
