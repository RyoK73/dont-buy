import { signOutAction } from "@/auth/signio/signout-action";
import { vi, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Toaster } from "@/design-system/ui/toast";
import userEvent from "@testing-library/user-event";
import { SignOutButton } from "@/auth/signio/signout-button";

vi.mock("@/auth/signio/signout-action", () => ({
  signOutAction: vi.fn(),
}));

it("サインアウト: エラー時にトーストが表示される", async () => {
  vi.mocked(signOutAction).mockResolvedValue({
    error: "failed to signout",
  });

  render(
    <>
      <SignOutButton />
      <Toaster />
    </>,
  );
  await userEvent.click(screen.getByRole("button", { name: "サインアウト" }));

  await waitFor(() => {
    expect(screen.getByText("サインアウトに失敗しました。")).toBeDefined();
  });
});
