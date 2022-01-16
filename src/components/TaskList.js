import { React, useState } from "react";
import Task from "./Task";

function TaskList({ tasksToDisplay, handleDelete }) {
 
  return (
    <div className="tasks">
      {tasksToDisplay.map((task, index) => {
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
