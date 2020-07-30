import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CREATEBOOK } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: 'Action' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    const { title } = this.state;
    const { category } = this.state;
    const { addBook } = this.props;
    let setId = Math.floor(Math.random() * 50) + 41;
    event.preventDefault();
    const book = {
      id: setId += 5,
      title,
      category,
    };
    addBook(book);
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;
    const { category } = this.state;
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form id="bookForm" name="myForm" onSubmit={this.handleSubmit}>
        <label htmlFor="bookForm">
          Book title:
          <input type="text" name="bookName" value={title} onChange={event => this.handleChange(event, 'title')} />
        </label>
        <label htmlFor="bookForm">
          Select category:
          <select value={category} name="categoryName" onChange={event => this.handleChange(event, 'category')}>
            { categories.map(category => (
              <option key={category} value={category}>{ category }</option>
            )) }
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(CREATEBOOK(book));
  },
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
