import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CREATEBOOK } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, title: '', category: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.target.name === 'bookName'){
      this.setState({title: event.target.value});
    } else {
      this.setState({category: event.target.value});
    }
  }


  handleSubmit(event) {
    const { title } = this.state;
    const { category } = this.state;
    let setId = Math.floor(Math.random() * 50) + 41;
     event.preventDefault();
     const book = {
       id: setId += 5,
       title: title,
       category: category,
     }
     this.props.addBook(book);
  }

  render() {
    const { title } = this.state;
    const { category } = this.state;
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form id="bookForm" onSubmit={this.handleSubmit}>
        <label htmlFor="bookForm">
          Book title:
          <input type="text" name="bookName" value={title} onChange={this.handleChange} />
        </label>
        <label htmlFor="bookForm">
          Select category:
          <select value={category} name="categoryName" onChange={this.handleChange}>
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

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(CREATEBOOK(book));
  },
});


export default connect(null,mapDispatchToProps)(BooksForm);
