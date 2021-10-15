import React, { useState, useEffect } from 'react';

function Header() {
    return(
        <header className="header">
            <h1>My First React App</h1>
        </header>
    )
}

function Content(){
    return(
        <div className="content">
            <p>
                Ini adalah React app yang bertujuan untuk mempelajari cara 
                menggunakan function component dan hooks 
            </p>
        </div>
    )
}

function Footer(){
    return (
        <div className="footer">
            <p>&copy; Difen Yedidya - 2021</p>
        </div>
    )
}

function HeroName (props){
    return (
        <h3>{props.name}</h3>
    )
}

function Hero (props){
    const [name, setName] = useState('');

    return(
        <div>
            <HeroName name="difen"/>
        </div>
    )
}

function Counter({initialCount}) {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>You click {count} times</p>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </>
    );
}

function EffectReact(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked it ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

function App(){
    return(
        <div className="container">
            <Header/>
            <hr/>
            <Content/>
            <hr/>
            <Counter/>
            <hr/>
            <EffectReact/>
            <hr/>
            <Hero/>
            <Footer/>
        </div>
    );
}

export default App;