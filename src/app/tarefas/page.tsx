"use client";
import { useTarefaContext } from "@/data/ContextTarefa";
import Tarefa from "@/componentes/tarefas";

export default function TarefasPage() {
  const { tarefas } = useTarefaContext();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            titulo={tarefa.title}
            concluido={tarefa.completed}
          />
        ))}
      </div>
    </div>
  );
}
