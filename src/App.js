import { useState } from "react";
import CreateTask from "./components/CreateTask/CreateTask";
import TasksList from "./components/TasksList/TasksList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, header: 'My Task', content: 'Make a dinner' },
    { id: 2, header: 'My Task', content: 'Make a dinner' },
    { id: 3, header: 'My Task', content: 'Make a dinner' },
    { id: 4, header: 'My Task', content: 'Make a dinner' },
    { id: 5, header: 'My Task', content: 'Make a dinner' },
  ])

  return (
    <>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
