import { signInAction, type FormState } from "@/auth/signio/signin-action";
import { SignInAnonymouslyAction } from "@/auth/signio/signin-annonymously-action";
import { SignInForm } from "@/auth/signio/signin-form";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "node:test";
import { expect, vi, it } from "vitest";
import { Toaster } from "@/design-system/ui/toast";

vi.mock("@/auth/signio/signin-action", () => ({
  signInAction: vi.fn(),
}));

vi.mock("@/auth/signio/signin-annonymously-action", () => ({
  SignInAnonymouslyAction: vi.fn(),
}));

describe("通常サインイン", () => {
  it("エラー時にトースト通知が表示される", async () => {
    vi.mocked(signInAction).mockResolvedValue({ error: "user couldn't find" });
    render(
      <>
        <SignInForm />
        <Toaster />
      </>,
    );

    await userEvent.type(screen.getByLabelText("Email"), "test@example.com");
    await userEvent.type(screen.getByLabelText("Password"), "wrongpass");
    await userEvent.click(screen.getByRole("button", { name: "サインイン" }));

    expect(
      await screen.findByText("サインインできませんでした"),
    ).toBeInTheDocument();
  });

  it("サインインボタン押下後、ボタンがdisabledになり、完了後再度有効になる", async () => {
    let resolveAction: (value: FormState) => void;
    vi.mocked(signInAction).mockReturnValue(
      new Promise((resolve) => {
        resolveAction = resolve;
      }),
    );
    render(<SignInForm />);

    const signInButton = screen.getByRole("button", {
      name: "サインイン",
    });

    await userEvent.type(screen.getByLabelText("Email"), "test@test.com");
    await userEvent.type(screen.getByLabelText("Password"), "test1234");
    await userEvent.click(signInButton);

    // pending中
    await waitFor(() => {
      expect(signInButton).toBeDisabled();
    });

    // pending解除
    resolveAction!(undefined);

    await waitFor(() => {
      expect(signInButton).toBeEnabled();
    });
  });
});

describe("ゲストログイン", () => {
  it("エラー時トースト表示", async () => {
    vi.mocked(SignInAnonymouslyAction).mockResolvedValue({
      error: "user couldn't find",
    });
    render(
      <>
        <SignInForm />
        <Toaster />
      </>,
    );

    await userEvent.click(
      screen.getByRole("button", { name: "ゲストとしてサインイン" }),
    );

    await waitFor(() => {
      expect(screen.getByText("サインインできませんでした")).toBeDefined();
    });
  });
  it("送信中ボタン disabled + ラベル変化", async () => {
    let resolveAction: (value: FormState) => void;
    vi.mocked(SignInAnonymouslyAction).mockReturnValue(
      new Promise((resolve) => {
        resolveAction = resolve;
      }),
    );
    render(<SignInForm />);

    const signInAnnonymouslyButton = screen.getByRole("button", {
      name: "ゲストとしてサインイン",
    }) as HTMLButtonElement;
    await userEvent.click(signInAnnonymouslyButton);

    waitFor(() => {
      expect(signInAnnonymouslyButton.disabled).toBe(true);
      resolveAction!(undefined);
    });
  });
});
