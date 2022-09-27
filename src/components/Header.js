import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
const Header = () => {
  const [info, setInfo] = useState("");
  const { tasks, setTasks } = useGlobalContext();

  const submitHandler = () => {
    if (!info) {
      return;
    }
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    const task = { task: info, id: uniqid };
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
