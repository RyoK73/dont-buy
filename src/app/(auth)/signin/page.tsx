import { SignInForm } from "@/auth/signio";

const SignInPage = () => {
  return (
    <div className="flex flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-2xl font-medium decoration-secondary decoration-wavy decoration-2 underline underline-offset-8">
          おかえりなさい
        </h1>
        <p className="text-sm text-muted-foreground">
          続きを書きとめに、サインインしましょう。
        </p>
      </div>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
