import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
 
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            text={task.text}
            category={task.category}
            handleDelete={() => handleDelete(index)}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
