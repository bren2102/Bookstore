/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  render() {
    const { title } = this.props;
    const { id } = this.props;
    const { category } = this.props;
    return (
      <td>
        <p>
          {' '}
          {id}
          {' '}
        </p>
        <p>
          {' '}
          {title}
          {' '}
        </p>
        <p>
          {' '}
          {category}
          {' '}
        </p>
      </td>
    );
  }
}

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  id: 0,
  title: null,
  category: null,
};

export default Book;
