import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  console.log(tasks);
  return (
    <div className="tasks">
      {tasks.map(function ({ category, text, index }) {
        return <Task key={index} text={text} category={category} />;
      })}
    </div>
  );
}

export default TaskList;
