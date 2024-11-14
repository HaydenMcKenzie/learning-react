import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './book';

/*
function Greeting() {
    return <h2>My First Component</h2>
}
*/

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
