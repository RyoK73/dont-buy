import Link from "next/link";
import { NoteButton } from "@/design-system/note-button";

const ConfirmPage = () => {
  return (
    <div className="flex flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-2xl font-medium decoration-secondary decoration-wavy decoration-2 underline underline-offset-8">
          確認メールを送信しました
        </h1>
        <p className="text-sm text-muted-foreground">
          届いたメール内のリンクを開いて、登録を完了してください。完了したら、サインインしてノートを開始できます。
        </p>
      </div>
      <NoteButton
        render={<Link href="/signin" />}
        variant="sticky"
        className="w-full"
      >
        サインインへ
      </NoteButton>
    </div>
  );
};

export default ConfirmPage;
