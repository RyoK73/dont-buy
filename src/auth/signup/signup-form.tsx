"use client";
import { NoteInput } from "@/design-system/note-input";
import { NoteButton } from "@/design-system/note-button";
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
    toast.add({ description: signUpError?.error });
  }, [signUpError]);
  return (
    <form action={formSignUpAction}>
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
            <NoteButton type="submit" variant="sticky" disabled={isPending}>
              {isPending ? "サインアップ中" : "サインアップ"}
            </NoteButton>
          </div>
        </Field>
      </FieldGroup>
    </form>
  );
};
