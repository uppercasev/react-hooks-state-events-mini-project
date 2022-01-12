import React from "react";

function Task({ key, text, category }) {
  return (
    <div className="task" key={key}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
