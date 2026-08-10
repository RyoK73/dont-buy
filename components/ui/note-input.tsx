import * as React from "react";

import { Input } from "@base-ui/react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type NoteInputProps = Omit<React.ComponentProps<typeof Input>, "id"> & {
  id: string;
  label: string;
  variant?: "default" | "price";
};

function NoteInput({
  id,
  label,
  variant = "default",
  className,
  type,
  ...props
}: NoteInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-center gap-1 border-b border-primary has-focus:border-b-2">
        {variant === "price" && <span className="text-on-surface">¥</span>}
        <Input
          id={id}
          type={variant === "price" ? "number" : type}
          inputMode={variant === "price" ? "numeric" : undefined}
          className={cn(
            "h-auto rounded-none border-0 bg-transparent px-1 py-1 shadow-none focus-visible:ring-0",
            variant === "price" && "text-right",
            className,
          )}
          {...props}
        />
      </div>
    </div>
  );
}

export { NoteInput };
