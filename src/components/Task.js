import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useGlobalContext } from "../context/appContext";
const Task = ({ task, id }) => {
  const { setTasks, tasks } = useGlobalContext();
  const [isEdit, setIsEdit] = useState(false);
  const [info, setInfo] = useState(task);

  const removeHandler = () => {
    if (isEdit) {
      return;
    }
    const newList = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newList);
  };

  const changeHandler = () => {
    setInfo(task);
    if (!isEdit) {
      setIsEdit(true);
    } else {
      if (info === "") {
        const newList = tasks.filter((task) => {
          return task.id !== id;
        });
        setTasks(newList);
        setIsEdit(false);
        return;
      }
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, task: info };
        }

        return task;
      });
      setTasks(newTasks);
      setIsEdit(false);
    }
  };

  return (
    <div className="task">
      <p className="task-info">
        {isEdit ? (
          <>
            <input
              type="text"
              value={info}
              className="edit-input"
              onChange={(e) => setInfo(e.target.value)}
            />
            <button className="submit-btn" onClick={changeHandler}>
              Submit
            </button>
          </>
        ) : (
          task
        )}
      </p>
      <div className="icons">
        <div className="edit-icon" onClick={changeHandler}>
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
