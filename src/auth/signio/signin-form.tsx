"use client";
import { NoteButton } from "@/design-system/note-button";
import { NoteInput } from "@/design-system/note-input";
import Link from "next/link";
import { Field, FieldDescription, FieldGroup } from "@/design-system/ui/field";
import { useActionState, useEffect } from "react";
import { signInAction, type FormState } from "@/auth/signio/signin-action";
import { signInAnonymouslyAction } from "@/auth/signio/signin-anonymously-action";
import { toast } from "@/design-system/ui/toast";

const authAction = async (prevState: FormState, formData: FormData) => {
  const intent = formData.get("intent");
  if (intent === "guest") {
    return signInAnonymouslyAction();
  }
  return signInAction(prevState, formData);
};

export const SignInForm = () => {
  const [signInError, formSignInAction, isPending] = useActionState(
    authAction,
    undefined,
  );
  useEffect(() => {
    if (signInError?.error) {
      toast.add({
        title: "サインインできませんでした",
        description: signInError.error,
        type: "error",
      });
    }
  }, [signInError]);

  return (
    <form action={formSignInAction} className="flex flex-col gap-8">
      <FieldGroup>
        <Field>
          <NoteInput
            label="Email"
            id="email-input"
            type="email"
            placeholder="dont-buy@buy.com"
            name="email"
            required={true}
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
            required={true}
          />
          <FieldDescription>パスワードを入力してください</FieldDescription>
        </Field>
      </FieldGroup>

      <div className="flex flex-col gap-3">
        <NoteButton
          type="submit"
          name="intent"
          value="signin"
          variant="sticky"
          disabled={isPending}
          className="w-full"
        >
          {isPending ? "サインイン中…" : "サインイン"}
        </NoteButton>
        <NoteButton
          type="submit"
          name="intent"
          value="guest"
          formNoValidate
          variant="stickySecondary"
          size="sm"
          disabled={isPending}
          className="w-full rotate-0 opacity-80 hover:opacity-100"
        >
          {isPending ? "サインイン中…" : "ゲストとしてサインイン"}
        </NoteButton>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        アカウントをお持ちでない方は{" "}
        <Link
          href="/signup"
          className="font-medium text-primary underline underline-offset-4"
        >
          新規登録
        </Link>
      </p>
    </form>
  );
};
