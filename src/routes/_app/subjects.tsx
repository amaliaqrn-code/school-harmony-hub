import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/_app/subjects")({ component: SubjectsPage });

const subjects = [
  { code: "MATH-X", name: "Mathematics", grade: "X", teacher: "Pak Rahman", credits: 4 },
  { code: "PHYS-X", name: "Physics", grade: "X", teacher: "Bu Siti", credits: 3 },
  { code: "CHEM-X", name: "Chemistry", grade: "X", teacher: "Pak Joko", credits: 3 },
  { code: "BIOL-X", name: "Biology", grade: "X", teacher: "Bu Maya", credits: 3 },
  { code: "ENG-X", name: "English", grade: "X", teacher: "Bu Lina", credits: 3 },
  { code: "QUR-X", name: "Quran & Hadith", grade: "X", teacher: "Ust. Fauzan", credits: 4 },
  { code: "ARB-X", name: "Arabic", grade: "X", teacher: "Ust. Hamzah", credits: 3 },
  { code: "HIST-X", name: "History", grade: "X", teacher: "Bu Indah", credits: 2 },
];

function SubjectsPage() {
  return (
    <div>
      <PageHeader title="Subjects" subtitle="Curriculum subjects assigned to teachers" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {subjects.map((s) => (
          <Card key={s.code} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-info/15 p-2 text-info"><BookOpen className="h-4 w-4" /></div>
                <span className="text-xs text-muted-foreground">{s.credits} credits</span>
              </div>
              <CardTitle className="mt-2 text-base">{s.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm">
              <div className="font-mono text-xs text-muted-foreground">{s.code} · Grade {s.grade}</div>
              <div className="text-muted-foreground">Teacher: <span className="text-foreground">{s.teacher}</span></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
