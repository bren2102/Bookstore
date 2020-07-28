import React from 'react';
import ReactDOM from 'react-dom';


class BooksList extends React.Component {
  constructor(props) {
    super(props);
    const books = state => ({ books: [ state.books ] });
    this.state = { books }
  }

  render(){
    const libros = ["A", "B", "C"];
    const books = state => ({ books: [ state.books ] });
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
