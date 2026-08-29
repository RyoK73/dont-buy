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
  it("サインアップボタン押下後、エラーの場合トースト通知が表示される", async () => {
    vi.mocked(signUpAction).mockResolvedValue({ error: "SignUp Failed" });
    render(
      <>
        <SignUpForm />
        <Toaster />
      </>,
    );
    await userEvent.type(screen.getByLabelText("Email"), "test@email.com");
    await userEvent.type(screen.getByLabelText("Password"), "test1234");

    await userEvent.click(
      screen.getByRole("button", { name: "アカウントを作成" }),
    );

    expect(await screen.findByText("登録できませんでした")).toBeInTheDocument();
  });

  it("サインアップボタン押下後、ボタンはdisabledになり、完了は再度有効になる", async () => {
    let resolveAction: (value: FormState) => void;
    vi.mocked(signUpAction).mockReturnValue(
      new Promise((resolve) => {
        resolveAction = resolve;
      }),
    );

    render(<SignUpForm />);

    const signUpButton = screen.getByRole("button", {
      name: "アカウントを作成",
    });

    await userEvent.type(screen.getByLabelText("Email"), "test@test.com");
    await userEvent.type(screen.getByLabelText("Password"), "test1234");
    await userEvent.click(signUpButton);

    // pending中
    await waitFor(() => {
      expect(signUpButton).toBeDisabled();
    });

    resolveAction!(undefined);

    await waitFor(() => {
      expect(signUpButton).toBeEnabled();
    });
  });
});
