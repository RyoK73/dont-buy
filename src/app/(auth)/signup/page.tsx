import { SignUpForm } from "@/auth/signup";

const SignUpPage = () => {
  return (
    <div className="flex flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-2xl font-medium decoration-secondary decoration-wavy decoration-2 underline underline-offset-8">
          はじめまして
        </h1>
        <p className="text-sm text-muted-foreground">
          新しいノートをひらいて、書きとめる習慣を始めましょう。
        </p>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
