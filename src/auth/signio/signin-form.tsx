"use client";
import { NoteButton } from "@/design-system/note-button";
import { Label } from "@/design-system/ui/label";
import { NoteInput } from "@/design-system/note-input";
import Link from "next/link";
import { Field, FieldDescription, FieldGroup } from "@/design-system/ui/field";
import { useActionState } from "react";
import { signInAction, type FormState } from "@/auth/signio/signin-action";
import { SignInAnonymouslyAction } from "@/auth/signio/signin-annonymously-action";

const authAction = async (prevState: FormState, formData: FormData) => {
  const intent = formData.get("intent");
  if (intent === "guest") {
    return SignInAnonymouslyAction();
  }
  return signInAction(prevState, formData);
};

export const SignInForm = () => {
  const [signInError, formSignInAction, isPending] = useActionState(
    authAction,
    undefined,
  );
  return (
    <form action={formSignInAction}>
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
        <Field className="flex">
          <div className="flex flex-row content-between">
            <NoteButton name="intent" value="signin" variant="sticky">
              サインイン
            </NoteButton>
            <NoteButton name="intent" value="guest" variant="stickySecondary">
              ゲストとしてサインイン
            </NoteButton>
          </div>
          <Label>
            アカウントをお持ちでない方は<Link href="">新規登録</Link>
          </Label>
        </Field>
      </FieldGroup>
    </form>
  );
};
