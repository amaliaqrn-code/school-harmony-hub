import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  label, value, delta, icon: Icon, tone = "primary",
}: {
  label: string;
  value: string | number;
  delta?: { value: string; positive?: boolean };
  icon: LucideIcon;
  tone?: "primary" | "success" | "warning" | "info" | "destructive";
}) {
  const tones: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
    info: "bg-info/15 text-info",
    destructive: "bg-destructive/10 text-destructive",
  };
  return (
    <Card className="border-border/60 transition-shadow hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
            {delta && (
              <div className={cn("mt-1 inline-flex items-center gap-1 text-xs font-medium",
                delta.positive ? "text-success" : "text-destructive")}>
                {delta.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {delta.value}
              </div>
            )}
          </div>
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", tones[tone])}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
