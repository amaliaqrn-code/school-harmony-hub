import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { clinicVisits } from "@/lib/mock-data";
import { Stethoscope, Pill, Activity } from "lucide-react";

export const Route = createFileRoute("/_app/health")({ component: HealthPage });

const meds = [
  { name: "Paracetamol 500mg", stock: 240, unit: "tablet" },
  { name: "Amoxicillin 250mg", stock: 80, unit: "capsule" },
  { name: "Cold pack", stock: 12, unit: "pack" },
  { name: "Bandage roll", stock: 30, unit: "roll" },
];

function HealthPage() {
  return (
    <div>
      <PageHeader title="Health Unit / UKS" subtitle="Medical records, clinic visits and medicine stock" />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Visits (May)" value={48} icon={Stethoscope} tone="info" />
        <StatCard label="Medicine SKUs" value={meds.length} icon={Pill} tone="primary" />
        <StatCard label="Active Cases" value={3} icon={Activity} tone="warning" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Recent Clinic Visits</CardTitle></CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Complaint</th>
                  <th className="px-4 py-3">Treatment</th>
                </tr>
              </thead>
              <tbody>
                {clinicVisits.map((v) => (
                  <tr key={v.id} className="border-t border-border/60">
                    <td className="px-4 py-3 font-mono text-xs">{v.id}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.date}</td>
                    <td className="px-4 py-3 font-medium">{v.student}</td>
                    <td className="px-4 py-3">{v.complaint}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.treatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Medicine Stock</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {meds.map((m) => (
              <div key={m.name} className="flex items-center justify-between rounded-lg border border-border/60 p-3 text-sm">
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.unit}</div>
                </div>
                <span className={`text-sm font-semibold ${m.stock < 30 ? "text-destructive" : "text-foreground"}`}>{m.stock}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
