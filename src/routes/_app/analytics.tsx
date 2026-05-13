import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { enrollmentTrend, attendanceTrend, financeTrend, gradeDistribution } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/analytics")({ component: Analytics });

const PIE_COLORS = ["var(--color-chart-1)","var(--color-chart-2)","var(--color-chart-3)","var(--color-chart-4)","var(--color-chart-5)"];

function Analytics() {
  return (
    <div>
      <PageHeader title="Analytics" subtitle="Cross-module insights and trends" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Enrollment Trajectory</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={enrollmentTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background:"var(--color-popover)", border:"1px solid var(--color-border)", borderRadius:8 }} />
                <Legend />
                <Line type="monotone" dataKey="students" stroke="var(--color-chart-1)" strokeWidth={2} />
                <Line type="monotone" dataKey="applicants" stroke="var(--color-chart-2)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Finance Overview</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financeTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background:"var(--color-popover)", border:"1px solid var(--color-border)", borderRadius:8 }} />
                <Legend />
                <Bar dataKey="revenue" fill="var(--color-chart-1)" radius={[6,6,0,0]} />
                <Bar dataKey="expense" fill="var(--color-chart-4)" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Attendance — This Week</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background:"var(--color-popover)", border:"1px solid var(--color-border)", borderRadius:8 }} />
                <Legend />
                <Bar dataKey="present" stackId="a" fill="var(--color-chart-2)" radius={[6,6,0,0]} />
                <Bar dataKey="absent" stackId="a" fill="var(--color-chart-4)" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Grade Distribution</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={gradeDistribution} dataKey="value" nameKey="grade" innerRadius={60} outerRadius={100}>
                  {gradeDistribution.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ background:"var(--color-popover)", border:"1px solid var(--color-border)", borderRadius:8 }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
