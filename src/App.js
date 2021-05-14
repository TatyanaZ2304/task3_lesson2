import React from 'react';
import './App.css';


class Example extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div><Example message="Hello!"/></div>
        <div><Example message="How are you?"/></div>
        <div><Example message="Bye!"/></div>
      </div>
      )
  }
}

export default App;
