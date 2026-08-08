import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldGroup,
} from "@/components/ui/field";

const Page = () => {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="email-input">Email</FieldLabel>
        <Input id="email-input" type="email" placeholder="dont-buy@buy.com" />
        <FieldDescription>メールアドレスを入力してください</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="password-input">User Name</FieldLabel>
        <Input id="password-input" type="password" placeholder="パスワード" />
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
