"use client";
import { NoteButton } from "@/design-system/note-button";
import { signOutAction } from "@/auth/signio/signout-action";
import { toast } from "@/design-system/ui/toast";

const SignOutButton = () => {
  return (
    <NoteButton
      onClick={async () => {
        const result = await signOutAction();
        if (result?.error) {
          toast.add({
            title: "サインアウトに失敗しました。",
            description: result.error,
            type: "error",
          });
        }
      }}
    >
      サインアウト
    </NoteButton>
  );
};

export { SignOutButton };
