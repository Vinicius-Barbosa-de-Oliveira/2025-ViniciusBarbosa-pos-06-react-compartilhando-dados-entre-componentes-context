"use client";

import { useState } from "react";
import { useTarefaContext } from "@/data/ContextTarefa";

export default function NovaTarefaPage() {
  const { adicionarTarefa } = useTarefaContext();
  const [titulo, setTitulo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (titulo.trim()) {
      adicionarTarefa(titulo);
      setTitulo("");
      alert("Tarefa adicionada!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Adicionar Nova Tarefa</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Digite a tarefa"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
