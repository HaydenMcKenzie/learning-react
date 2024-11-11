import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

/*
function Greeting() {
    return <h2>My First Component</h2>
}
*/

function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                const { img, title, author } = book
                return <Book img={img} title={title} author={author} />
            })}
        </section>
    )
}

const books = [
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/81P9B8sY4AL._AC_UL600_SR600,400_.jpg',
        title: 'How to Catch a Turkey',
        author: 'Adam Wallace',
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/41e+dwz5W5L._AC_UL600_SR600,400_.jpg',
        title: 'Melania',
        author: 'Melania Trump',
    },
]

const Book = (props) => {
    console.log(props)
    const { img, title, author } = props
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}
// Or it can be :: const Book = { img, title, author } => {
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
