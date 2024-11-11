import React from 'react'
import ReactDOM from 'react-dom/client'

/*
function Greeting() {
    return <h2>My First Component</h2>
}
*/

// Div or Section or React.Fragment
function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    )
}

const Person = () => <h2>Joe Doe</h2>
const Message = () => {
    return <p>This is a paragraph about me</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)
