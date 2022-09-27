import React from "react";
import Task from "./Task";
import { useState } from "react";
const Tasks = () => {
  const [tasks, setTasks] = useState([
    { task: "Clean my room" },
    { task: "Wash the dishes" },
    { task: "Study for school" },
  ]);
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <Task task={task.task} />;
      })}
    </div>
  );
};

export default Tasks;
