"use client";
import { useState } from "react";

interface TarefaProps {
  titulo: string;
  concluido?: boolean;
}

export default function Tarefa({ titulo, concluido }: TarefaProps) {
  const [estaConcluido, setEstaConcluido] = useState(concluido);

  const classeCard = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
    estaConcluido
      ? "bg-gray-800 hover:border-gray-800"
      : "bg-gray-400 hover:border-gray-400"
  }`;
  const classeCorDoTexto = estaConcluido ? "text-amber-50" : "";

  return (
    <div className={classeCard} onClick={() => setEstaConcluido(!estaConcluido)}>
      <h3 className={`text-xl font-bold ${classeCorDoTexto}`}>{titulo}</h3>
      <p className={`text-sm ${classeCorDoTexto}`}>
        {estaConcluido ? "Concluída" : "Pendente"}
      </p>
    </div>
  );
}
