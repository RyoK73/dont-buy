import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { NoteInput } from "@/components/ui/note-input";
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
          <Button variant="sticky">ログイン</Button>
          <Button variant="sticky-secondary">ゲストとして試す</Button>
        </div>
        <Label>
          アカウントをお持ちでない方は<Link href="">新規登録</Link>
        </Label>
      </Field>
    </FieldGroup>
  );
};

export default Page;
