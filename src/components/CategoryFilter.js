import React from "react";

function CategoryFilter({ selectedCategory, categories, handleClick }) {
  console.log(selectedCategory);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={category === selectedCategory ? "selected" : ""}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
