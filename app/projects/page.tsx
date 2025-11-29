"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Calendar, Plus, CornerRightDown, Tractor } from "lucide-react";
import Header from "../_components/header-app";

// Mock temporário
const projects = [
  {
    id: "p1",
    title: "Plataforma AI Core",
    client: "BlueTech",
    status: "ACTIVE",
    priority: "HIGH",
    techs: ["Next.js", "Prisma", "PostgreSQL"],
    dueDate: "2025-03-20",
  },
  {
    id: "p2",
    title: "Sistema Orion Cloud",
    client: "Orion Systems",
    status: "PLANNED",
    priority: "MEDIUM",
    techs: ["Go", "Kubernetes"],
    dueDate: "2025-05-10",
  },
  {
    id: "p3",
    title: "NovaPulse Dashboard",
    client: "NovaPulse",
    status: "ACTIVE",
    priority: "URGENT",
    techs: ["React", "Node.js"],
    dueDate: "2025-01-15",
  },
];

const statusColors = {
  PLANNED: "text-slate-300 border-slate-600",
  ACTIVE: "text-blue-400 border-blue-800",
  PAUSED: "text-yellow-300 border-yellow-600",
  COMPLETED: "text-green-400 border-green-700",
  URGENT: "text-red-400 border-red-700",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="max-w-[1400px] mx-auto px-6 pt-24">
        <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Tractor className="h-8 w-8 text-blue-700" /> Projetos
            </h1>
            <p className="text-slate-400 flex items-center gap-2">
              Acompanhe todos os projetos da Nuxt
              <CornerRightDown className="h-4 w-4" />
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar projetos..."
              className="bg-white text-white"
            />

            <Select>
              <SelectTrigger className="bg-white text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="PLANNED">Planejado</SelectItem>
                <SelectItem value="ACTIVE">Ativo</SelectItem>
                <SelectItem value="PAUSED">Pausado</SelectItem>
                <SelectItem value="COMPLETED">Concluído</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="bg-white text-white">
                <SelectValue placeholder="Prioridade" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="LOW">Baixa</SelectItem>
                <SelectItem value="MEDIUM">Média</SelectItem>
                <SelectItem value="HIGH">Alta</SelectItem>
                <SelectItem value="URGENT">Urgente</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-blue-900 hover:bg-blue-800 text-white whitespace-nowrap cursor-pointer">
              <Plus className="mr-2 h-4 w-4" /> Novo Projeto
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900 border-slate-800 backdrop-blur-xl shadow-lg hover:border-blue-800 transition hover:shadow-blue-800/30"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-300 line-clamp-2">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-slate-400">
                  Cliente: {project.client}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge
                    className={`border ${
                      statusColors[project.status as keyof typeof statusColors]
                    } bg-transparent`}
                  >
                    {project.status}
                  </Badge>
                  <Badge className="border border-blue-800 text-blue-400 bg-transparent">
                    {project.priority}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-blue-900/40 border border-blue-800 text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  Prazo: {project.dueDate}
                </div>

                <div className="flex justify-end">
                  <Link href={`/projects/${project.id}`}>
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white cursor-pointer">
                      Abrir
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
