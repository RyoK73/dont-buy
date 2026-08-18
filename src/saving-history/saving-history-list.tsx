import { Check } from "lucide-react";

import { Separator } from "@/design-system/ui/separator";

export type SavingHistoryItemData = {
  id: string;
  checked: boolean;
  date: string;
  label: string;
  amount: number;
};

export type SavingHistoryItemProps = Omit<SavingHistoryItemData, "id">;

const SavingHistoryItem = ({
  checked,
  date,
  label,
  amount,
}: SavingHistoryItemProps) => {
  return (
    <div className="flex items-center gap-3 py-3 text-on-surface">
      <span className="flex size-5 shrink-0 items-center justify-center">
        {checked && <Check className="size-4 text-accent-save-deep" />}
      </span>
      <span className="w-20 shrink-0 text-sm text-on-surface/70">{date}</span>
      <span className="flex-1 truncate text-sm">{label}</span>
      <span className="shrink-0 font-bold">¥{amount.toLocaleString()}</span>
    </div>
  );
};

export type SavingHistoryListProps = {
  items: SavingHistoryItemData[];
};

const SavingHistoryList = ({ items }: SavingHistoryListProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id}>
          <SavingHistoryItem
            checked={item.checked}
            date={item.date}
            label={item.label}
            amount={item.amount}
          />
          {index < items.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  );
};

export { SavingHistoryList, SavingHistoryItem };
