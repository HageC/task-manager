import React, { useEffect } from "react";
import Task from "./Task";
import { useGlobalContext } from "../context/appContext";
const Tasks = () => {
  const { tasks, setTasks } = useGlobalContext();

  if (tasks.length > 0) {
    return (
      <div className="tasks">
        {tasks.map((task, index) => {
          return <Task key={index} task={task.task} id={task.id} />;
        })}
      </div>
    );
  }
};

export default Tasks;
