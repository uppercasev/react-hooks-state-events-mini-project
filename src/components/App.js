import { React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksList, setTasksList] = useState(TASKS);
  const [tasksToDisplay, setTasksToDisplay] = useState(tasksList);
  const [selectedCategory, setSelectedCategory] = useState("All");

  console.log(tasksToDisplay);

  const handleDelete = (id) => {
    setTasksList(tasksList.filter((task, index) => index !== id));
    setTasksToDisplay(tasksToDisplay.filter((task, index) => index !== id));
  };

  const handleClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setTasksToDisplay([...tasksList]);
    } else {
      setTasksToDisplay(tasksList.filter((task) => task.category === category));
    }
  };

  const onTaskFormSubmit = (newTask) => {
    setTasksList([...tasksList, newTask]);
    setTasksToDisplay([...tasksToDisplay, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        categories={CATEGORIES}
        handleClick={handleClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={tasksToDisplay} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
