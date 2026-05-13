import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { applicants } from "@/lib/mock-data";
import { UserPlus, ClipboardCheck, CheckCircle2, Clock } from "lucide-react";

export const Route = createFileRoute("/_app/admissions")({ component: Admissions });

const tone = (s: string) =>
  s === "Accepted" ? "secondary" : s === "Waitlist" ? "outline" : "default";

function Admissions() {
  return (
    <div>
      <PageHeader title="PPDB / Admissions" subtitle="2026/2027 academic year intake" actions={
        <Button size="sm">Open registration form</Button>
      } />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Applicants" value={137} icon={UserPlus} tone="primary" />
        <StatCard label="Test Scheduled" value={42} icon={Clock} tone="warning" />
        <StatCard label="Tests Completed" value={73} icon={ClipboardCheck} tone="info" />
        <StatCard label="Accepted" value={58} icon={CheckCircle2} tone="success" />
      </div>

      <Card className="mt-6">
        <CardHeader><CardTitle>Applicant Tracking</CardTitle></CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">From</th>
                  <th className="px-4 py-3">Target</th>
                  <th className="px-4 py-3 text-right">Test Score</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((a) => (
                  <tr key={a.id} className="border-t border-border/60">
                    <td className="px-4 py-3 font-mono text-xs">{a.id}</td>
                    <td className="px-4 py-3 font-medium">{a.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{a.from}</td>
                    <td className="px-4 py-3">{a.target}</td>
                    <td className="px-4 py-3 text-right">{a.testScore}</td>
                    <td className="px-4 py-3"><Badge variant={tone(a.status) as never}>{a.status}</Badge></td>
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
