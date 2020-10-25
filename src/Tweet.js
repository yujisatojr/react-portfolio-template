import React from 'react';
import './App.css';

function Tweet () {
    const sayHello = () => {
        console.log('Hello')
    }
    return (
        <div className="tweet">
            <h3>This is the hello component</h3>
            <p>Tweet is great</p>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}

export default Tweet;