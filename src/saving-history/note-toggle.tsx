import { Toggle } from "@base-ui/react";
import { ToggleGroup } from "@base-ui/react";
import { Dispatch, SetStateAction } from "react";

import { cn } from "@/lib/utils";

type Category = {
  category: string;
  ariaLabel: string;
}[];

type CategoryToggleProps = {
  toggleValue: string[];
  setToggleValue: Dispatch<SetStateAction<string[]>>;
  categories: Category;
  className?: string;
};
const CategoryToggle = ({
  toggleValue,
  setToggleValue,
  categories,
  className,
}: CategoryToggleProps) => {
  return (
    <ToggleGroup
      aria-label="Category Selection"
      value={toggleValue}
      onValueChange={setToggleValue}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {categories.map((entry) => {
        return (
          <Toggle
            key={entry.category}
            aria-label={entry.ariaLabel}
            value={entry.category}
            className="rounded-sm bg-neutral-paper-line px-3 py-2 text-sm text-on-surface outline-none transition-colors data-[pressed]:bg-accent-buy focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            {entry.category}
          </Toggle>
        );
      })}
    </ToggleGroup>
  );
};

export { type Category, CategoryToggle };
