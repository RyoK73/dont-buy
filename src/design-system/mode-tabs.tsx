"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/design-system/lib/utils";

const TABS = [
  { label: "Don't Buy", href: "/dont-buy" },
  { label: "BUY", href: "/buy" },
] as const;

function ModeTabs() {
  const pathname = usePathname();

  return (
    <nav className="inline-flex w-fit items-center rounded-full bg-neutral-paper-line p-1">
      {TABS.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold text-on-surface transition-colors",
              active ? "bg-accent-save" : "bg-transparent",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}

export { ModeTabs };
