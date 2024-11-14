import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

/*
function Greeting() {
    return <h2>My First Component</h2>
}
*/

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81P9B8sY4AL._AC_UL600_SR600,400_.jpg',
    title: 'How to Catch a Turkey',
    author: 'Adam Wallace',
    id: 1,
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41e+dwz5W5L._AC_UL600_SR600,400_.jpg',
    title: 'Melania',
    author: 'Melania Trump',
    id: 2,
  },
];

function BookList() {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    //console.log('Handle Form Input');
  };
  const handleButtonClick = () => {
    alert('Handle Button Click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">submit</button>
        <div>
          <button onClick={handleButtonClick} type="button">
            Click Me
          </button>
        </div>
      </form>
    </section>
  );
};

const Book = (props) => {
  //console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
