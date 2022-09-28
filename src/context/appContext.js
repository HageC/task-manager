import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [globalEdit, setGlobalEdit] = useState(false);

  useEffect(() => {
    if (tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);
  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
