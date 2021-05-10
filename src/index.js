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
    let showAccount = () => {
        return (<div>You are logged in</div>)
    }
    return (
        <>
            <div
                style={styles.box}>
                {/* <h2>Welcome {name + ' ' + lname}</h2>
                <h3>I'm {age * 2} years old</h3>
                <h3>{loggedIn ? showAccount() : ''}</h3> */}
                <h1 style={styles.h1}>Testing</h1>
            </div>
            <div
                className="main-box">
                <h1 style={styles.h1}>Testing</h1>
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
