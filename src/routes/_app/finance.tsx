import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { invoices, financeTrend, fmtIDR } from "@/lib/mock-data";
import { Wallet, TrendingUp, AlertCircle, CreditCard, Download } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export const Route = createFileRoute("/_app/finance")({ component: Finance });

const tone = (s: string) => s === "Paid" ? "secondary" : s === "Pending" ? "outline" : "destructive";

function Finance() {
  return (
    <div>
      <PageHeader title="Finance" subtitle="Tuition, billing, payroll and financial reports" actions={
        <>
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Report</Button>
          <Button size="sm">New invoice</Button>
        </>
      } />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue (May)" value={fmtIDR(184_500_000)} delta={{ value:"+8.4%", positive:true }} icon={TrendingUp} tone="success" />
        <StatCard label="Outstanding" value={fmtIDR(23_450_000)} icon={AlertCircle} tone="warning" />
        <StatCard label="Payments Today" value={fmtIDR(12_800_000)} icon={CreditCard} tone="info" />
        <StatCard label="Payroll (May)" value={fmtIDR(96_300_000)} icon={Wallet} tone="primary" />
      </div>

      <Card className="mt-6">
        <CardHeader><CardTitle>Revenue Trend</CardTitle></CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={financeTrend}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip contentStyle={{ background:"var(--color-popover)", border:"1px solid var(--color-border)", borderRadius:8 }} />
              <Area type="monotone" dataKey="revenue" stroke="var(--color-chart-1)" fill="url(#rev)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader><CardTitle>Recent Invoices</CardTitle></CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Invoice #</th>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                  <th className="px-4 py-3">Due</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((i) => (
                  <tr key={i.id} className="border-t border-border/60">
                    <td className="px-4 py-3 font-mono text-xs">{i.id}</td>
                    <td className="px-4 py-3 font-medium">{i.student}</td>
                    <td className="px-4 py-3 text-right">{fmtIDR(i.amount)}</td>
                    <td className="px-4 py-3 text-muted-foreground">{i.due}</td>
                    <td className="px-4 py-3"><Badge variant={tone(i.status) as never}>{i.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
