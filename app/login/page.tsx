import { NoteButton } from "@/components/common/note-button";
import { Label } from "@/components/ui/label";
import { NoteInput } from "@/components/common/note-input";
import Link from "next/link";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";

const Page = () => {
  return (
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
  );
};

export default Page;
