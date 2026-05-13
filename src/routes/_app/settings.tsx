import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useApp } from "@/lib/app-context";

export const Route = createFileRoute("/_app/settings")({ component: SettingsPage });

function SettingsPage() {
  const { theme, toggleTheme } = useApp();
  return (
    <div>
      <PageHeader title="Settings" subtitle="Workspace, preferences and integrations" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Appearance</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Row label="Dark mode" desc="Toggle between light and dark theme">
              <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
            </Row>
            <Row label="Language" desc="Default interface language">
              <select className="h-9 rounded-lg border border-input bg-background px-3 text-sm">
                <option>English</option><option>Bahasa Indonesia</option><option>العربية</option>
              </select>
            </Row>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Notifications</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Row label="Email alerts" desc="Daily digest of activity"><Switch defaultChecked /></Row>
            <Row label="Push notifications" desc="Mobile push for assignments and grades"><Switch defaultChecked /></Row>
            <Row label="Payment reminders" desc="Notify parents of due invoices"><Switch defaultChecked /></Row>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>School Info</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Field label="School name" value="Nur Al-Huda Integrated Islamic School" />
            <Field label="Academic year" value="2026/2027" />
            <Field label="Timezone" value="Asia/Jakarta (GMT+7)" />
            <Button size="sm" className="mt-2">Save changes</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Integrations</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {["Payment Gateway","WhatsApp Notifications","Google Workspace","Zoom"].map((i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border/60 p-3 text-sm">
                <span>{i}</span>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Row({ label, desc, children }: { label: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      {children}
    </div>
  );
}
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted-foreground">{label}</label>
      <input defaultValue={value} className="mt-1 h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-ring" />
    </div>
  );
}
