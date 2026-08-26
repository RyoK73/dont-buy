import { vi, it, describe, expect } from "vitest";
import { signUpAction } from "@/auth/signup/signup-action";
import { signUpNewUser } from "@/auth/signup/signup";
import { redirect } from "next/navigation";
import { User, Session, AuthError } from "@supabase/supabase-js";

vi.mock("@/auth/signup/signup", () => ({
  signUpNewUser: vi.fn(),
}));
vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

const createMockUser = (overrides: Partial<User> = {}): User => {
  return {
    id: "test",
    aud: "test",
    app_metadata: {},
    user_metadata: {},
    created_at: "2026-08-26",
    ...overrides,
  };
};

const createMockSession = (overrides: Partial<Session> = {}): Session => {
  return {
    access_token: "test",
    refresh_token: "test",
    expires_in: 1,
    token_type: "bearer",
    user: createMockUser(),
    ...overrides,
  };
};
describe("サインアップ処理", () => {
  it("登録済みのメールアドレスの場合", async () => {
    vi.mocked(signUpNewUser).mockResolvedValue({
      data: {
        user: createMockUser({ identities: [] }),
        session: null,
      },
      error: null,
    });

    const formData = new FormData();
    formData.append("email", "test");
    formData.append("password", "test");

    expect(await signUpAction(undefined, formData)).toEqual({
      error: "このメールアドレスは既に登録されています",
    });
  });
  it("メールアドレスとパスワードが空欄の場合", async () => {
    const formData = new FormData();
    formData.append("email", "");
    formData.append("password", "");
    expect(await signUpAction(undefined, formData)).toEqual({
      error: "EmailまたはPasswordが必要です",
    });
  });
  it("予期せぬエラーの場合", async () => {
    vi.mocked(signUpNewUser).mockResolvedValue({
      data: {
        user: createMockUser(),
        session: null,
      },
      error: new AuthError("予期せぬエラーが発生しました", 500, "3"),
    });
    const formData = new FormData();
    formData.append("email", "test@example.com");
    formData.append("password", "test123");
    expect(await signUpAction(undefined, formData)).toEqual({
      error: "予期せぬエラーが発生しました",
    });
  });
  it("ユーザーがメール認証済みの場合のredirect", async () => {
    vi.mocked(signUpNewUser).mockResolvedValue({
      data: {
        user: createMockUser(),
        session: createMockSession(),
      },
      error: null,
    });
    const formData = new FormData();
    formData.append("email", "test@example.com");
    formData.append("password", "test123");
    await signUpAction(undefined, formData);
    expect(redirect).toHaveBeenCalledWith("/dont-buy");
  });
  it("ユーザーがメール認証をしていない場合のredirect", async () => {
    vi.mocked(signUpNewUser).mockResolvedValue({
      data: {
        user: createMockUser(),
        session: null,
      },
      error: null,
    });
    const formData = new FormData();
    formData.append("email", "test@example.com");
    formData.append("password", "test123");
    await signUpAction(undefined, formData);
    expect(redirect).toHaveBeenCalledWith("/signup/confirm");
  });
});
