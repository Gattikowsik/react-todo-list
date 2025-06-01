import React from "react";

const TodoItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      <span className="task-text">{task.text}</span>
      <div className="actions">
        <span className={`status ${task.completed ? "done" : "pending"}`}>
          {task.completed ? "✅ Done" : "⏳ Pending"}
        </span>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </button>
        <button onClick={() => onDelete(task.id)} className="delete">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
