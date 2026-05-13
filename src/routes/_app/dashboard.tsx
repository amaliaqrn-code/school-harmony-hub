import { createFileRoute } from "@tanstack/react-router";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend,
} from "recharts";
import { Users, GraduationCap, Wallet, ClipboardCheck, UserPlus, Building2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  stats, enrollmentTrend, attendanceTrend, financeTrend, gradeDistribution,
  activityLog, fmtIDR,
} from "@/lib/mock-data";
import { useApp } from "@/lib/app-context";
import { Download, FileSpreadsheet } from "lucide-react";

export const Route = createFileRoute("/_app/dashboard")({
  component: Dashboard,
});

const PIE_COLORS = ["var(--color-chart-1)","var(--color-chart-2)","var(--color-chart-3)","var(--color-chart-4)","var(--color-chart-5)"];

function Dashboard() {
  const { user, role } = useApp();

  return (
    <div>
      <PageHeader
        title={`Welcome back, ${user.name.split(" ")[0]}`}
        subtitle={`Here's what's happening across the school today · ${role.replace("_", " ")} view`}
        actions={
          <>
            <Button variant="outline" size="sm" className="gap-2"><FileSpreadsheet className="h-4 w-4" /> Export Excel</Button>
            <Button size="sm" className="gap-2"><Download className="h-4 w-4" /> Export PDF</Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Students" value={stats.students.toLocaleString()} delta={{ value: "+24 this month", positive: true }} icon={Users} tone="primary" />
        <StatCard label="Teachers" value={stats.teachers} delta={{ value: "+3", positive: true }} icon={GraduationCap} tone="info" />
        <StatCard label="Attendance Rate" value={`${stats.attendanceRate}%`} delta={{ value: "+1.2%", positive: true }} icon={ClipboardCheck} tone="success" />
        <StatCard label="Revenue (May)" value={fmtIDR(stats.revenueMonth)} delta={{ value: "+8.4%", positive: true }} icon={Wallet} tone="warning" />
        <StatCard label="PPDB Applicants" value={stats.pendingApplicants} delta={{ value: "+18", positive: true }} icon={UserPlus} tone="info" />
        <StatCard label="Outstanding Invoices" value={fmtIDR(stats.outstandingInvoices)} delta={{ value: "−3.1%", positive: true }} icon={Wallet} tone="destructive" />
        <StatCard label="Classes Running" value={stats.classes} icon={GraduationCap} tone="primary" />
        <StatCard label="Dorm Residents" value={stats.dormResidents} icon={Building2} tone="success" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Enrollment & Applicants</CardTitle>
              <p className="text-xs text-muted-foreground">Last 6 months</p>
            </div>
            <Badge variant="secondary">Live</Badge>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrollmentTrend}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-chart-2)" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="var(--color-chart-2)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                <Legend />
                <Area type="monotone" dataKey="students" stroke="var(--color-chart-1)" fill="url(#g1)" strokeWidth={2} />
                <Area type="monotone" dataKey="applicants" stroke="var(--color-chart-2)" fill="url(#g2)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
            <p className="text-xs text-muted-foreground">Term overview</p>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={gradeDistribution} dataKey="value" nameKey="grade" innerRadius={55} outerRadius={90} paddingAngle={3}>
                  {gradeDistribution.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue vs Expense</CardTitle>
            <p className="text-xs text-muted-foreground">Million IDR</p>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financeTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                <Legend />
                <Bar dataKey="revenue" fill="var(--color-chart-1)" radius={[6,6,0,0]} />
                <Bar dataKey="expense" fill="var(--color-chart-4)" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {activityLog.map((a) => (
              <div key={a.id} className="flex gap-3 rounded-lg border border-border/60 p-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div className="min-w-0">
                  <p className="text-sm"><span className="font-medium">{a.actor}</span> {a.action}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader><CardTitle>Weekly Attendance</CardTitle></CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceTrend} stackOffset="sign">
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                <Legend />
                <Bar dataKey="present" stackId="a" fill="var(--color-chart-2)" radius={[6,6,0,0]} />
                <Bar dataKey="absent" stackId="a" fill="var(--color-chart-4)" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
