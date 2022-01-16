import { React, useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const options = categories.filter((category) => category !== "All");
  const [newTask, setNewTask] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("");

  function handleTextChange(event) {
    setNewTask(event.target.value);
  }

  function handleCategorySelect(event) {
    setNewTaskCategory(event.target.value);
  }

  const createTask = (event) => {
    event.preventDefault();
    if (newTask === "") {
      alert("Please enter task details.");
    } else if (newTaskCategory === "") {
      alert("Please select a category.");
    } else {
      onTaskFormSubmit({ text: newTask, category: newTaskCategory });
    }
  };

  return (
    <form className="new-task-form" onSubmit={createTask}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={handleTextChange}
          value={newTask}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={handleCategorySelect}
          value={newTaskCategory}
        >
          <option value="">[Select]</option>
          {options.map((option) => {
            return <option key={option}>{option}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
