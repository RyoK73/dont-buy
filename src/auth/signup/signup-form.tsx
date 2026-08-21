"use client";
import { NoteInput } from "@/design-system/note-input";
import { NoteButton } from "@/design-system/note-button";
import { Field, FieldGroup, FieldDescription } from "@/design-system/ui/field";
import { Label } from "@/design-system/ui/label";
import Link from "next/link";
import { signUpAction } from "@/auth/signup-action";
import { useActionState } from "react";

export const SignUpForm = () => {
  const [error, formAction, isPending] = useActionState(
    signUpAction,
    undefined,
  );
  return (
    <form action={formAction}>
      <FieldGroup>
        <Field>
          <NoteInput
            label="Email"
            id="email-input"
            type="email"
            placeholder="dont-buy@buy.com"
          />
          <FieldDescription>メールアドレスを入力してください</FieldDescription>
        </Field>
        <Field>
          <NoteInput
            label="Password"
            id="password-input"
            type="password"
            placeholder="xxxxxxxx"
          />
          <FieldDescription>パスワードを入力してください</FieldDescription>
        </Field>
        <Field className="flex">
          <div className="flex flex-row content-between">
            <NoteButton variant="sticky">ログイン</NoteButton>
            <NoteButton variant="stickySecondary">ゲストとして試す</NoteButton>
          </div>
          <Label>
            アカウントをお持ちでない方は<Link href="/signup">新規登録</Link>
          </Label>
        </Field>
      </FieldGroup>
    </form>
  );
};
