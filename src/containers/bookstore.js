import React from 'react';
import Book from '../components/book';

const BookStore = (props) => {
  return (
    <div >
      <table style={{
        width: '100%',
      }}
      >
        <tbody>
          {props.bookslist.map(book => (
            <tr key={book.id}>
              <Book id={book.id} title={book.title} category={book.category} />
              <td>
                <button type="button" onClick={() => { props.deleteBook(book.id); }}>Remove Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookStore;
