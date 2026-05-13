import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";
import { classesData } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/classes")({ component: ClassesPage });

function ClassesPage() {
  return (
    <div>
      <PageHeader title="Classes" subtitle="Manage class groups, homerooms and rooms" actions={
        <Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> New class</Button>
      } />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {classesData.map((c) => (
          <Card key={c.id} className="transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-start justify-between gap-2">
              <div>
                <CardTitle className="text-base">{c.id}</CardTitle>
                <p className="mt-1 text-xs text-muted-foreground">Grade {c.grade} · Room {c.room}</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-2 text-primary"><Users className="h-4 w-4" /></div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Homeroom</span><span className="font-medium">{c.homeroom}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Students</span><span className="font-medium">{c.students}</span></div>
              <Button variant="outline" size="sm" className="mt-2 w-full">View details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
