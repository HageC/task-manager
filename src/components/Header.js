import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
const Header = () => {
  const [info, setInfo] = useState("");
  const { tasks, setTasks } = useGlobalContext();

  const submitHandler = () => {
    const task = { task: info };
    setTasks([...tasks, task]);
    setInfo("");
  };

  return (
    <div className="header">
      <h1>Task Manager</h1>

      <input
        className="task-input"
        type="text"
        placeholder="enter task"
        name="task-input"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />

      <button className="task-button" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default Header;
