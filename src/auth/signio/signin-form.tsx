import { NoteButton } from "@/design-system/note-button";
import { Label } from "@/design-system/ui/label";
import { NoteInput } from "@/design-system/note-input";
import Link from "next/link";
import { Field, FieldDescription, FieldGroup } from "@/design-system/ui/field";
import { useActionState } from "react";
import { signUpAction } from "@/auth/signup/signup-action";

export const SignInForm = () => {
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
            アカウントをお持ちでない方は<Link href="">新規登録</Link>
          </Label>
        </Field>
      </FieldGroup>
    </form>
  );
};
