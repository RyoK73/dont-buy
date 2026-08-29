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

describe("ゲストサインイン", () => {
  // 本来ゲストサインインはEmail,Passwordの入力は不要だが、js-domがformNoValidateを付与したsubmitに対応していないため、このテストではEmail,Passwordを渡す
  it("エラー時にトースト通知が表示される", async () => {
    vi.mocked(SignInAnonymouslyAction).mockResolvedValue({
      error: "user couldn't find",
    });
    render(
      <>
        <SignInForm />
        <Toaster />
      </>,
    );

    await userEvent.type(screen.getByLabelText("Email"), "test@test.com");
    await userEvent.type(screen.getByLabelText("Password"), "test1234");
    await userEvent.click(
      screen.getByRole("button", { name: "ゲストとしてサインイン" }),
    );

    expect(
      await screen.findByText("サインインできませんでした"),
    ).toBeInTheDocument();
  });

  it("'ゲストとしてサインイン'ボタンに'formNoValidate'が付与されている", async () => {
    render(<SignInForm />);
    const guestSignInButton = screen.getByRole("button", {
      name: "ゲストとしてサインイン",
    });
    expect(guestSignInButton).toHaveAttribute("formNoValidate");
  });
  it("'ゲストとしてサインイン'ボタン押下後、ボタンが'disabled'になり、完了後'enabled'に変わる", async () => {
    let resolveAction: (value: FormState) => void;
    vi.mocked(SignInAnonymouslyAction).mockReturnValue(
      new Promise((resolve) => {
        resolveAction = resolve;
      }),
    );

    render(<SignInForm />);

    const guestSignInButton = screen.getByRole("button", {
      name: "ゲストとしてサインイン",
    });

    await userEvent.type(screen.getByLabelText("Email"), "test@test.com");
    await userEvent.type(screen.getByLabelText("Password"), "test1234");
    await userEvent.click(guestSignInButton);

    await waitFor(() => {
      expect(guestSignInButton).toBeDisabled();
    });

    resolveAction!(undefined);

    await waitFor(() => {
      expect(guestSignInButton).toBeEnabled();
    });
  });
});
