import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Wrench, Plus, SquareTerminal, CornerRightDown } from "lucide-react";
import Header from "../_components/header-app";

const techs = [
  {
    id: "t1",
    name: "Next.js",
    slug: "nextjs",
    category: "Frontend",
    projects: 12,
  },
  {
    id: "t2",
    name: "Prisma",
    slug: "prisma",
    category: "ORM",
    projects: 7,
  },
  {
    id: "t3",
    name: "PostgreSQL",
    slug: "postgresql",
    category: "Database",
    projects: 10,
  },
  {
    id: "t4",
    name: "Docker",
    slug: "docker",
    category: "DevOps",
    projects: 5,
  },
];

export default function TechsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="max-w-[1400px] mx-auto px-6 pt-24">
        <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <SquareTerminal className="h-8 w-8 text-blue-700" /> Tecnologias
            </h1>
            <p className="text-slate-400 flex items-center gap-2">
              Gerencie e organize as tecnologias utilizadas nos projetos{" "}
              <CornerRightDown className="h-4 w-4" />
            </p>
          </div>

          <div className="flex gap-3">
            <Input
              placeholder="Buscar tecnologia..."
              className="bg-white text-black"
            />
            <Button className="bg-blue-900 hover:bg-blue-800 text-white whitespace-nowrap">
              <Plus className="mr-2 h-4 w-4" /> Nova Tech
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((tech) => (
            <Card
              key={tech.id}
              className="bg-gray-900 border-slate-800 backdrop-blur-xl shadow-lg hover:border-blue-800 transition hover:shadow-blue-800/30"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-800 text-white border border-blue-900">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-blue-300">
                      {tech.name}
                    </CardTitle>
                    <p className="text-sm text-slate-400">{tech.category}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <Badge className="bg-blue-900/40 border border-blue-800 text-blue-300">
                  {tech.slug}
                </Badge>

                <p className="text-sm text-slate-300">
                  Utilizada em {tech.projects} projetos
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
