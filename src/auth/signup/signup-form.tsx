"use client";
import { NoteInput } from "@/design-system/note-input";
import { NoteButton } from "@/design-system/note-button";
import Link from "next/link";
import { Field, FieldGroup, FieldDescription } from "@/design-system/ui/field";
import { signUpAction } from "@/auth/signup/signup-action";
import { useActionState, useEffect } from "react";
import { toast } from "@/design-system/ui/toast";

export const SignUpForm = () => {
  const [signUpError, formSignUpAction, isPending] = useActionState(
    signUpAction,
    undefined,
  );
  useEffect(() => {
    if (signUpError?.error) {
      toast.add({
        title: "登録できませんでした",
        description: signUpError.error,
        type: "error",
      });
    }
  }, [signUpError]);
  return (
    <form action={formSignUpAction} className="flex flex-col gap-8">
      <FieldGroup>
        <Field>
          <NoteInput
            label="Email"
            id="email-input"
            type="email"
            placeholder="dont-buy@buy.com"
            name="email"
          />
          <FieldDescription>メールアドレスを入力してください</FieldDescription>
        </Field>
        <Field>
          <NoteInput
            label="Password"
            id="password-input"
            type="password"
            placeholder="xxxxxxxx"
            name="password"
          />
          <FieldDescription>パスワードを入力してください</FieldDescription>
        </Field>
      </FieldGroup>

      <NoteButton
        type="submit"
        variant="sticky"
        disabled={isPending}
        className="w-full"
      >
        {isPending ? "登録中…" : "アカウントを作成"}
      </NoteButton>

      <p className="text-center text-sm text-muted-foreground">
        すでにアカウントをお持ちの方は{" "}
        <Link
          href="/signin"
          className="font-medium text-primary underline underline-offset-4"
        >
          サインイン
        </Link>
      </p>
    </form>
  );
};
