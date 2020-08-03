import React from 'react';

const CategoryFilter = (props) => {
  const categories = ['ALL', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
      <label>
        Select category:
            <select name="categoryName" onChange={event => props.handleFilterChange(event)}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
  );
}

export default CategoryFilter;
