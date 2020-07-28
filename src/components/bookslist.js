import React from 'react';
import { connect } from 'react-redux';
import Book from './book';

const BooksList = props => {
  const { books } = props;

  return (
    <div id="bookslist">
    <table style={{
      width: '100%',
    }}>
      <tbody>
        {books.map((book) => {
          return (
            <tr key={book.id}>
              <Book book={book} id={book.id} title={book.title} category={book.category}/>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
