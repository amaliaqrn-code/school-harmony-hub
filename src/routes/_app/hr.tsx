import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { employees, fmtIDR } from "@/lib/mock-data";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/_app/hr")({ component: HRPage });

function HRPage() {
  return (
    <div>
      <PageHeader title="HRD & Employees" subtitle="Employee records, payroll and leave"
        actions={<Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> New employee</Button>} />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">Headcount</CardTitle></CardHeader><CardContent><div className="text-3xl font-semibold">86</div></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">On Leave</CardTitle></CardHeader><CardContent><div className="text-3xl font-semibold text-warning">4</div></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">Open Leave Requests</CardTitle></CardHeader><CardContent><div className="text-3xl font-semibold text-info">7</div></CardContent></Card>
      </div>

      <Card className="mt-6">
        <CardHeader><CardTitle>Employee Directory</CardTitle></CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3 text-right">Salary</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e) => (
                  <tr key={e.id} className="border-t border-border/60">
                    <td className="px-4 py-3 font-mono text-xs">{e.id}</td>
                    <td className="px-4 py-3 font-medium">{e.name}</td>
                    <td className="px-4 py-3">{e.role}</td>
                    <td className="px-4 py-3 text-muted-foreground">{e.dept}</td>
                    <td className="px-4 py-3 text-right">{fmtIDR(e.salary)}</td>
                    <td className="px-4 py-3"><Badge variant={e.status === "Active" ? "secondary" : "outline"}>{e.status}</Badge></td>
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
