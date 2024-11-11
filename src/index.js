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
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    )
}

const Image = () => (
    <img
        src="https://images-na.ssl-images-amazon.com/images/I/81P9B8sY4AL._AC_UL600_SR600,400_.jpg"
        alt="How to Catch a Turkey"
    ></img>
)
const Title = () => <h2>How to Catch a Turkey</h2>
const Author = () => <h4>Adam Wallace</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
