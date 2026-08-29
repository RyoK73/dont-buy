import { vi, it, describe, expect } from "vitest";
import { signInAction } from "@/auth/signio/signin-action";
import { redirect } from "next/navigation";
import { signInWithEmail } from "@/auth/signio/signin";
import { AuthError, User, Session } from "@supabase/supabase-js";
vi.mock("@/auth/signio/signin", () => ({
  signInWithEmail: vi.fn(),
}));
vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

// supabaseのsignInWithEmailの戻り値作成用関数1
const createMockUser = (overrides: Partial<User> = {}): User => ({
  id: "test",
  aud: "test",
  app_metadata: {},
  user_metadata: {},
  created_at: "2026-8-28",
  ...overrides,
});

// supabaseのsignInWithEmailの戻り値作成用関数2
const createMockSession = (overrides: Partial<Session> = {}): Session => ({
  access_token: "test",
  refresh_token: "test",
  expires_in: 1,
  token_type: "bearer",
  user: createMockUser(),
  ...overrides,
});

describe("サインイン処理", () => {
  // signUpWithEmailまで到達しないので{data,error}の戻り値のMockは不要
  it("emailとpasswordが空白の場合、入力を促すエラーオブジェクトを返す", async () => {
    const formData = new FormData();
    formData.append("email", "");
    formData.append("password", "");
    expect(await signInAction(undefined, formData)).toEqual({
      error: "EmailまたはPasswordが必要です",
    });
  });

  it("その他のエラーがあればエラーメッセージオブジェクトを返す", async () => {
    // signUpWithEmailの戻り値{data,error}が必要
    vi.mocked(signInWithEmail).mockResolvedValue({
      data: {
        user: createMockUser(),
        session: createMockSession(),
      },
      error: new AuthError("an Error has occured"),
    });

    const formData = new FormData();
    formData.append("email", "test@test.com");
    formData.append("password", "test1234");
    expect(await signInAction(undefined, formData)).toEqual({
      error: "an Error has occured",
    });
  });
  it("正常サインイン時に/dont-buyに遷移する", async () => {
    vi.mocked(signInWithEmail).mockResolvedValue({
      data: {
        user: createMockUser(),
        session: createMockSession(),
      },
      error: null,
    });

    const formData = new FormData();
    formData.append("email", "test@test.com");
    formData.append("password", "test1234");
    await signInAction(undefined, formData);

    expect(redirect).toHaveBeenCalledWith("/dont-buy");
  });
});
