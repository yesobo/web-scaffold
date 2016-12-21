import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return <h1>Hello</h1>
    }
}
console.log('rendering hello tag');
ReactDOM.render(<Hello/>, document.getElementById('hello'));