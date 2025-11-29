import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BriefcaseBusiness, CornerRightDown, Plus } from "lucide-react";
import Header from "../_components/header-app";

const clients = [
  {
    id: "c1",
    name: "BlueTech",
    company: "BlueTech Ltd.",
    email: "contato@bluetech.com",
    projects: 3,
  },
  {
    id: "c2",
    name: "Orion Systems",
    company: "Orion Corp.",
    email: "hello@orion.com",
    projects: 5,
  },
  {
    id: "c3",
    name: "NovaPulse",
    company: "NovaPulse",
    email: "team@novapulse.io",
    projects: 1,
  },
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <div className="pt-24 px-6 max-w-[1400px] mx-auto">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <BriefcaseBusiness className="h-8 w-8 text-blue-700" /> Clientes
            </h1>
            <p className="text-slate-400 flex items-center gap-2">
              Gerencie todos os clientes da Nuxt{" "}
              <CornerRightDown className="h-4 w-4" />
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <Input
              placeholder="Buscar clientes..."
              className="bg-white border-zinc-300 text-black w-full md:w-64"
            />
            <Button className="bg-blue-900 hover:bg-blue-800 text-white cursor-pointer">
              <Plus className="mr-2 h-4 w-4" /> Novo cliente
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <Card
              key={client.id}
              className="bg-zinc-100 transition shadow-lg hover:shadow-blue-900/10"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarFallback>
                      {client.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold text-black">
                      {client.name}
                    </CardTitle>
                    <p className="text-sm text-slate-500">{client.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2">
                <p className="text-sm text-slate-400">{client.email}</p>
                <p className="mt-2 text-sm text-slate-500">
                  {client.projects} projetos
                </p>

                <div className="mt-4 flex justify-end">
                  <Link href={`/clients/${client.id}`}>
                    <Button
                      variant="secondary"
                      className="bg-blue-900 hover:bg-blue-800 text-white cursor-pointer"
                    >
                      Abrir
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
