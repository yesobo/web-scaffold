import React from 'react';

export default class GaulsList extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ 
      gauls: [{
      name: "Asterix"
    }, {
      name: "Obelix"
    }]}
  } 
  render() {
    return (
      <ul>
        { this.state.gauls.map( (item) => 
          <li key={item.name}>{item.name}</li>
        )}
      </ul>);
  }
  // componentDidMount() {

  // }

  // componentWillUnmount() {

  // }
}