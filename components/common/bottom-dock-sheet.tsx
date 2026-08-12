import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

type BottomDockSheetPropsType = {
  triggerButton: React.ReactElement;
  children: React.ReactNode;
  className?: string;
};

const BottomDockSheet = ({
  triggerButton,
  children,
  className,
}: BottomDockSheetPropsType) => {
  return (
    <Sheet>
      <SheetTrigger render={triggerButton} />
      <SheetContent side="bottom">
        <div
          className={cn(
            "flex justify-center items-center min-h-[10vh]",
            className,
          )}
        >
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { type BottomDockSheetPropsType, BottomDockSheet };
