import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "teste",
      title: "Estudar",
      isCompleted: true,
    },
    {
      id: "teste2",
      title: "Jogar",
      isCompleted: false,
    },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} />
    </>
  );
}
