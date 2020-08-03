/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const { handleFilterChange } = props;
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <label>
      Select category:
      <select name="categoryName" onChange={event => handleFilterChange(event)}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
