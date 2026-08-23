"use client";
import { NoteButton } from "@/design-system/note-button";
import { Label } from "@/design-system/ui/label";
import { NoteInput } from "@/design-system/note-input";
import Link from "next/link";
import { Field, FieldDescription, FieldGroup } from "@/design-system/ui/field";
import { useActionState, useEffect } from "react";
import { signInAction, type FormState } from "@/auth/signio/signin-action";
import { SignInAnonymouslyAction } from "@/auth/signio/signin-annonymously-action";
import { toast } from "@/design-system/ui/toast";

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
  useEffect(() => {
    toast.add({
      description: signInError?.error,
    });
  }, [signInError]);

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
            <NoteButton
              type="submit"
              name="intent"
              value="signin"
              variant="sticky"
              disabled={isPending}
            >
              {isPending ? "サインイン中" : "サインイン"}
            </NoteButton>
            <NoteButton
              type="submit"
              name="intent"
              value="guest"
              variant="stickySecondary"
              disabled={isPending}
            >
              {isPending ? "サインイン中" : "ゲストとしてサインイン"}
            </NoteButton>
          </div>
          <Label>
            アカウントをお持ちでない方は<Link href="/signup">新規登録</Link>
          </Label>
        </Field>
      </FieldGroup>
    </form>
  );
};
