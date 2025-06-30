"use client";
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { TarefaInterface } from "@/types/tarefa";

interface ContextoTarefaProps {
  tarefas: TarefaInterface[];
  adicionarTarefa: (titulo: string) => void;
}

const ContextoTarefa = createContext<ContextoTarefaProps | undefined>(undefined);

export const ProvedorTarefa = ({ children }: { children: React.ReactNode }) => {
  const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => setTarefas(res.data.todos))
      .catch((err) => console.error("Erro ao carregar tarefas:", err));
  }, []);

  const adicionarTarefa = (titulo: string) => {
    const novaTarefa = {
      id: Date.now(),
      title: titulo,
      completed: false,
    };
    setTarefas((prev) => [novaTarefa, ...prev]);
  };

  return (
    <ContextoTarefa.Provider value={{ tarefas, adicionarTarefa }}>
      {children}
    </ContextoTarefa.Provider>
  );
};

export const useTarefaContext = () => {
  const contexto = useContext(ContextoTarefa);
  if (!contexto) {
    throw new Error("useTarefaContext precisa estar dentro de ProvedorTarefa");
  }
  return contexto;
};
