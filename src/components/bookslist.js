import React from 'react';
import { connect } from 'react-redux';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    const books = state => ({ books: [ state.initialState ] });
    this.state = { books }
  }

  render(){
    const libros = ["A", "B", "C"];
    const books = state => ({ books: [ state.initialState ] });
    console.log(books)
    return (
      <div id="bookslist">
      <table style={{
        width: '100%',
      }}>
      {libros.map((book) => {
        return (
          <tr>
            {book}
          </tr>
        );
      })}
      </table>
      </div>
    );
  }
}

export default BooksList;
