import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { gradeDistribution } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/grades")({ component: GradesPage });

const sample = [
  { student: "Ahmad Fauzi", math: 88, physics: 91, english: 84, quran: 95, avg: 89.5 },
  { student: "Siti Aminah", math: 92, physics: 88, english: 90, quran: 96, avg: 91.5 },
  { student: "Rizky Pratama", math: 74, physics: 70, english: 78, quran: 82, avg: 76.0 },
  { student: "Nadia Putri", math: 85, physics: 87, english: 89, quran: 92, avg: 88.2 },
  { student: "M. Iqbal", math: 80, physics: 82, english: 79, quran: 88, avg: 82.2 },
];

const grade = (n: number) => n >= 90 ? "A" : n >= 80 ? "B" : n >= 70 ? "C" : n >= 60 ? "D" : "E";

function GradesPage() {
  return (
    <div>
      <PageHeader title="Grades" subtitle="Term grades and grade distribution" />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Class X-IPA-1 — Mid Term</CardTitle></CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Student</th>
                    <th className="px-4 py-3 text-right">Math</th>
                    <th className="px-4 py-3 text-right">Physics</th>
                    <th className="px-4 py-3 text-right">English</th>
                    <th className="px-4 py-3 text-right">Quran</th>
                    <th className="px-4 py-3 text-right">Average</th>
                    <th className="px-4 py-3 text-center">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {sample.map((r) => (
                    <tr key={r.student} className="border-t border-border/60">
                      <td className="px-4 py-3 font-medium">{r.student}</td>
                      <td className="px-4 py-3 text-right">{r.math}</td>
                      <td className="px-4 py-3 text-right">{r.physics}</td>
                      <td className="px-4 py-3 text-right">{r.english}</td>
                      <td className="px-4 py-3 text-right">{r.quran}</td>
                      <td className="px-4 py-3 text-right font-semibold">{r.avg.toFixed(1)}</td>
                      <td className="px-4 py-3 text-center"><Badge>{grade(r.avg)}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Distribution</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gradeDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="grade" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background:"var(--color-popover)", border:"1px solid var(--color-border)", borderRadius:8 }} />
                <Bar dataKey="value" fill="var(--color-chart-1)" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
