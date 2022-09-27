import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useGlobalContext } from "../context/appContext";
const Task = ({ task, id }) => {
  const { setTasks, tasks } = useGlobalContext();
  const removeHandler = () => {
    const newList = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newList);
  };
  return (
    <div className="task">
      <p className="task-info">{task}</p>
      <div className="icons">
        <div className="edit-icon">
          <AiFillEdit />
        </div>
        <div className="trash-icon" onClick={removeHandler}>
          <BsFillTrashFill />
        </div>
      </div>
    </div>
  );
};

export default Task;
