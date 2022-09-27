import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
const Task = ({ task }) => {
  return (
    <div className="task">
      <p className="task-info">{task}</p>
      <div className="icons">
        <div className="edit-icon">
          <AiFillEdit />
        </div>
        <div className="trash-icon">
          <BsFillTrashFill />
        </div>
      </div>
    </div>
  );
};

export default Task;
