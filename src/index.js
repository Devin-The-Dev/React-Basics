import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const printAlert = (message) => {
        alert(message)
    }
    return (
        <>
            <Header background='black'>
                <div>Logo</div>
                <nav>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                </nav>
            </Header>

            <Header background='red'>
                <div>Logo</div>
            </Header>
        </>
    )
}

const Header = (props) => {
    return (
        <header style={{
            background: props.background,
            padding: '15px 20px',
            color: 'white'
        }}>
            {props.children}

        </header>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
