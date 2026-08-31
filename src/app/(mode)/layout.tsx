import { ModeTabs } from "@/design-system/mode-tabs";
import { SignOutButton } from "@/auth/signio/signout-button";

export default function ModeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex justify-center p-4">
        <ModeTabs />
        <SignOutButton />
      </div>
      {children}
    </div>
  );
}
