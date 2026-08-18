import { cn } from "@/design-system/lib/utils";
import { Progress } from "@base-ui/react";

type NoteProgressProps = {
  label: string;
  current: number;
  max: number;
  className?: string;
};

const NoteProgress = ({
  label,
  current,
  max,
  className,
}: NoteProgressProps) => {
  // max must be greater than 0
  if (max <= 0) {
    throw new Error("max must be greater than zero");
  }
  const percentage = Math.min(100, Math.round((current / max) * 100));
  const achieved = current >= max;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center justify-between">
        <span className="text-on-surface font-bold">{label}</span>
        {achieved ? (
          <span className=" bg-accent-save px-2.5 py-1 text-xs font-semibold text-accent-save-deep">
            購入可能
          </span>
        ) : (
          <span className="text-sm font-bold text-accent-buy-soft">
            {percentage}%
          </span>
        )}
      </div>
      <div className="text-sm text-on-surface/70">
        {achieved
          ? `¥${max.toLocaleString()}`
          : `¥${max.toLocaleString()}・あと¥${(max - current).toLocaleString()}`}
      </div>
      <Progress.Root value={percentage}>
        <Progress.Track className="flex h-3 w-full items-center overflow-x-hidden bg-muted">
          <Progress.Indicator
            className={cn(
              "h-full transition-all",
              achieved ? "bg-accent-save-deep" : "bg-accent-buy-soft",
            )}
          />
        </Progress.Track>
      </Progress.Root>
    </div>
  );
};

export { type NoteProgressProps, NoteProgress };
