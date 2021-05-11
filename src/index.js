import React from 'react';
import ReactDOM from 'react-dom';

let name = "Joe";
let lname = "Santos";
let age = 16;
let loggedIn = true;
let width = 400;
let height = 300;
let styles = {
    box: {
        background: 'red',
        color: 'white',
        textAlign: 'center',
        width: `${width * 3 / 2}px`,
        height: `${height}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        background: 'black',
        width: '100px',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '.8rem'
    }
}

const App = () => {
    const printAlert = (message) => {
        alert(message)
    }
    return (
        <>
            App
            <Heading content="Top JavaScript Frameworks" periods={['', '.', '..', '...']}></Heading>
            <Heading content="My Favorite Books" printAlert={printAlert}></Heading>
            <Heading content="I love Star Wars"></Heading>
        </>
    )
}

const Heading = (props) => {
    console.log(props)
    return (
        <h1
            onClick={() => props.printAlert('Hello World!')}>
            {props.content} {props.periods == undefined ? '' : props.periods[3]}
        </h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))
