import { useState } from "react";
import CreateTask from "./components/CreateTask/CreateTask";
import TasksList from "./components/TasksList/TasksList";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, header: 'My Task', content: 'Make a dinner' },
    { id: 2, header: 'My Task', content: 'Make a dinner' }
  ])

  return (
    <>
      <CreateTask tasks={tasks} setTask={setTask} />
      <TasksList tasks={tasks} />
    </>
  );
}

export default App;
