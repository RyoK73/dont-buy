"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";

import { cn } from "@/design-system/lib/utils";
import { Button } from "@/design-system/ui/button";

const emptySubscribe = () => () => {};

const useMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 z-50"
      aria-label={isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};

type NotebookPageProps = {
  children: React.ReactNode;
  className?: string;
};

const NotebookPage = ({ children, className }: NotebookPageProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div
        className={cn(
          "relative mx-auto min-h-full w-full max-w-107 bg-neutral-paper text-on-surface",
          className,
        )}
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 27px, var(--neutral-paper-line) 27px, var(--neutral-paper-line) 28px)",
        }}
      >
        <ThemeToggle />
        {children}
      </div>
    </ThemeProvider>
  );
};

export { NotebookPage, type NotebookPageProps };
