import React from 'react';
import ReactDOM from 'react-dom';


class BooksList extends React.Component {
  render(){
    const books = state => ({ books: state.books })
    return (
      <div id="bookslist">
      <table style="width:100%">
      books.map((book) => {
        return(
          <tr>
            book
          </tr>
        )
      })
      </table>
      </div>
    );
  }
}

export default BooksList;
