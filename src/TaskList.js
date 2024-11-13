import React from "react";

function TaskList({ tasks, toggleTaskCompletion }) {
  return (
    <div dir="rtl" className="task-list">
      <h2>רשימת משימות:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <div>
              תאריך:
              {task.myDate}
            </div>
            <div>
              המשימה:
              <strong>{task.title} </strong> {task.description}
            </div>
            <button
              className="complete-task-button"
              onClick={() => toggleTaskCompletion(index)}
            >
              {task.completed ? "סמן כלא הושלמה" : "סמן כהושלמה"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
