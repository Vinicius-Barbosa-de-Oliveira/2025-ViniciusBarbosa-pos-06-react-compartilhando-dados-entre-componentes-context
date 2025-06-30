export default function Home() {
	return (
	  <main className="container mx-auto p-4">
		<h1 className="text-2xl font-bold mb-6">Bem-vindo!</h1>
		<div className="space-x-4">
		  <a
			href="/tarefas"
			className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
		  >
			Ver Tarefas
		  </a>
		  <a
			href="/tarefas/nova"
			className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
		  >
			Nova Tarefa
		  </a>
		</div>
	  </main>
	);
  }
  