import React from 'react';

const CategoryFilter = ({categoryFilter}) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form id="filterForm" name="myForm" onSumbit={console.log('test')}>
      <label htmlFor="filterForm">
        Select category:
            <select name="categoryName" onChange={event => categoryFilter(event)}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Filter" />
    </form>
  );
}

export default CategoryFilter;