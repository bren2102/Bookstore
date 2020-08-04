/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Book extends React.Component {
  render() {
    const { title } = this.props;
    const { id } = this.props;
    const { category } = this.props;
    const { remove } = this. props;

    return (
      <td className="book-element">
      <div className="element-first">
      <ul>
        <li>{category}</li>
        <li>{title}</li>
        <li>Book #{id}</li>
      </ul>
        <div>
          <span>Comments</span><span id="span-divider"> | </span><button type="button" onClick={() => { remove(id); }}>Remove Book</button><span id="span-divider"> | </span><span>Edit</span>
        </div>
      </div>
      <div className="element-second">
      <FontAwesomeIcon icon={ faCircleNotch } id="circle" />
        <div>
          <h2>64%</h2>
          <p>Completed</p>
        </div>
      </div>
      <span id="line"></span>
      <div className="element-third">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button> UPDATE PROGRESS </button>
      </div>
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
