import { describe, vi, it, expect } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import { signUpAction, type FormState } from "@/auth/signup/signup-action";
import { SignUpForm } from "@/auth/signup/signup-form";
import userEvent from "@testing-library/user-event";
import { Toaster } from "@/design-system/ui/toast";

vi.mock("@/auth/signup/signup-action", () => ({
  signUpAction: vi.fn(),
}));

describe("サインアップ", () => {
  it("サインアップエラーのトースト通知が表示されるか", async () => {
    vi.mocked(signUpAction).mockResolvedValue({ error: "SignUp Failed" });
    render(
      <>
        <SignUpForm />
        <Toaster />
      </>,
    );

    await userEvent.click(
      screen.getByRole("button", { name: "アカウントを作成" }),
    );

    await waitFor(() => {
      expect(screen.getByText("登録できませんでした")).toBeDefined();
    });
  });
  it("サインアップ処理中にbuttonがdisableに変化するか", async () => {
    let resolveAction: (value: FormState) => void;
    vi.mocked(signUpAction).mockReturnValue(
      new Promise((resolve) => {
        resolveAction = resolve;
      }),
    );
    render(<SignUpForm />);
    const signUpButton = screen.getByRole("button", {
      name: "アカウントを作成",
    }) as HTMLButtonElement;

    await userEvent.click(signUpButton);

    await waitFor(() => {
      expect(signUpButton.disabled).toBe(true);
      resolveAction!(undefined);
    });
  });
});
