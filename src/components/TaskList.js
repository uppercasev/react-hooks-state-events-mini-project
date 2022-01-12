import { React, useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [tasksToDisplay, setTasksToDisplay] = useState(tasks);

  const handleDelete = (id) => {
    setTasksToDisplay(tasksToDisplay.filter((task, index) => index !== id));
  };

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
