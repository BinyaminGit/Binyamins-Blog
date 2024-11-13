import React from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "./TaskList";

function HomePage({ tasks, toggleTaskCompletion }) {
  const navigate = useNavigate();

  const handleCreateTaskClick = () => {
    navigate("/tasks/create-task");
  };

  return (
    <div className="task-manager-container">
  <h1 className="task-manager-title">מנהל המשימות</h1>
      <button className="create-task-button" onClick={handleCreateTaskClick}>
        צור משימה
      </button>
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}

export default HomePage;
