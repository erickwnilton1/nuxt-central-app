"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Plus, Rocket, CornerRightDown } from "lucide-react";
import Header from "../_components/header-app";

const teams = [
  {
    id: "t1",
    name: "Equipe Alpha",
    description: "Time responsável pelo core do sistema.",
    members: ["João", "Marina", "Carlos"],
  },
  {
    id: "t2",
    name: "Equipe Nexus",
    description: "Inovação e novas features experimentais.",
    members: ["Laura", "Diego"],
  },
  {
    id: "t3",
    name: "Equipe Orion",
    description: "Infraestrutura e DevOps.",
    members: ["Rafael", "Ana", "Miguel", "Tamires"],
  },
];

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-white text-black pb-16">
      <Header />

      <main className="max-w-[1400px] mx-auto px-6 pt-24">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Rocket className="h-8 w-8 text-orange-400" /> Times
            </h1>
            <p className="text-slate-400 flex items-center gap-2">
              Gerencie os times da Nuxt
              <CornerRightDown className="h-4 w-4" />
            </p>
          </div>

          <div className="flex gap-3">
            <Input
              placeholder="Buscar times..."
              className="bg-white border-zinc-300 text-black md:w-64"
            />
            <Button className="bg-blue-900 hover:bg-blue-800 text-white cursor-pointer">
              <Plus className="mr-2 h-4 w-4" /> Novo time
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Card
              key={team.id}
              className="bg-zinc-100 shadow-lg transition hover:shadow-blue-900/10"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-black">
                      {team.name}
                    </CardTitle>
                    <p className="text-sm text-slate-700 line-clamp-2">
                      {team.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-2">
                <p className="text-sm text-slate-500">
                  {team.members.length} membros
                </p>

                <div className="mt-4 flex justify-end">
                  <Link href={`/teams/${team.id}`}>
                    <Button
                      variant="secondary"
                      className="bg-blue-800 hover:bg-blue-900 text-white cursor-pointer"
                    >
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
