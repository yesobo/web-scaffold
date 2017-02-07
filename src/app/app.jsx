import React from 'react';

import GaulsList from './gauls-list.jsx';

export default class App extends React.Component {
  render(props) {
    return (
      <div>
        <h1>Por {this.props.god}</h1>
        <GaulsList />
      </div>
    )
  }
}