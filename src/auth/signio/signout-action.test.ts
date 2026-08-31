import { vi, it, describe, expect } from "vitest";
import { signOutAction } from "@/auth/signio/signout-action";
import { redirect } from "next/navigation";
import { signOut } from "@/auth/signio/signout";
import { AuthError } from "@supabase/supabase-js";

vi.mock("@/auth/signio/signout", () => ({
  signOut: vi.fn(),
}));
vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

describe("サインアウト処理", () => {
  it("エラーがあればエラーメッセージオブジェクトを返す", async () => {
    vi.mocked(signOut).mockResolvedValue({
      error: new AuthError("failed to signout"),
    });
    expect(await signOutAction()).toEqual({ error: "failed to signout" });
    expect(redirect).not.toHaveBeenCalled();
  });

  it("成功すれば/signinへリダイレクトする", async () => {
    vi.mocked(signOut).mockResolvedValue({ error: null });
    await signOutAction();
    expect(redirect).toHaveBeenCalledWith("/signin");
  });
});
