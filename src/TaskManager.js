import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import TaskFormPage from "./TaskFormPage";
import "./TaskManager.css";
import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]); // הוספת משימה עם completed=false
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
        }
      />
      <Route path="/create-task" element={<TaskFormPage addTask={addTask} />} />
    </Routes>
  );
}

export default TaskManager;
