import { React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksToDisplay, setTasksToDisplay] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (id) => {
    setTasksToDisplay(tasksToDisplay.filter((task, index) => index !== id));
  };

  const handleClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setTasksToDisplay([...TASKS]);
    } else {
      setTasksToDisplay(TASKS.filter((task) => task.category === category));
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        categories={CATEGORIES}
        handleClick={handleClick}
      />
      <NewTaskForm />
      <TaskList tasksToDisplay={tasksToDisplay} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
