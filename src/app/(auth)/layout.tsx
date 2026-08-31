export default function ModeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-1 justify-center">
      <div className="flex w-full max-w-107 flex-col">{children}</div>
    </div>
  );
}
