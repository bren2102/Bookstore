import React from 'react';
import { connect } from 'react-redux';
import { CREATEBOOK } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', title: '', category: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
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
     event.target.reset();
  }

  render() {
    const { title } = this.state;
    const { category } = this.state;
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form id="bookForm" onSubmit={this.handleSubmit}>
        <label htmlFor="bookForm">
          Book title:
          <input type="text" name="bookName" value={title} onChange={(event) => this.handleChange(event, "title")} />
        </label>
        <label htmlFor="bookForm">
          Select category:
          <select value={category} name="categoryName" onChange={(event) => this.handleChange(event, "category")}>
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


export default connect(null,mapDispatchToProps)(BooksForm);
