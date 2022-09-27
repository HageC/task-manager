import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>Task Manager</h1>

      <input
        className="task-input"
        type="text"
        placeholder="enter task"
        name="task-input"
      />

      <button className="task-button">Submit</button>
    </div>
  );
};

export default Header;
