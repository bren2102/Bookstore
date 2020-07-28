import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { book: '', category: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ book: event.value, category: event.target.value });
  }

  render() {
    const { book } = this.state;
    const { category } = this.state;
    return (
      <form id="bookForm">
        <label htmlFor="bookForm">
          Book title:
          <input type="text" value={book} onChange={this.handleChange} />
        </label>
        <label htmlFor="bookForm">
          Select category:
          <select value={category} onChange={this.handleChange}>
            <option value="Action">Action</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Kids">Kids</option>
            <option value="Learning">Learning</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BooksForm;
