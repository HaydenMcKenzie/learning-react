import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './book'
import Title from './title'

/*
function Greeting() {
    return <h2>My First Component</h2>
}
*/

function BookList() {
    return (
        <React.Fragment>
            <section className="titlename">
                <Title />
            </section>
            <section className="booklist">
                {books.map((book, index) => {
                    return <Book {...book} key={book.id} index={index} />
                })}
            </section>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
