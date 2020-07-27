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
            <th>{ book.Id }</th>
            <th>{ book.Title }</th>
            <th>{ book.Category }</th>
          </tr>
        )
      })
      </table>
      </div>
    );
  }
}

export default BooksList;
