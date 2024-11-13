import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskFormPage({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [myDate, setMyDate] = useState("1/1/1904");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //מונע מהדף לרפרש את עצמו
    const newTask = { myDate, title, description };
    addTask(newTask); // מוסיף את המשימה החדשה לרשימה
    navigate("/tasks"); // חזרה לדף הראשי
  };

  const cancelTask = () => {
    navigate("/tasks");
  };

  return (
    <div className="task-form-container">
      <h2>צור משימה חדשה</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <label>כותרת המשימה:</label>
        <input
          placeholder="כותרת"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>תיאור:</label>
        <textarea
          placeholder="תיאור המשימה"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label for="theDate">תאריך:</label>
        <br />
        <br />
        <input
          style={{ height: "40px" }}
          id="theDate"
          value={myDate}
          type="date"
          onChange={(e) => setMyDate(e.target.value)}
          required
        ></input>
        <br />
        <br />

        <button type="submit">שמור</button>
        <button onClick={cancelTask}>חזור</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
