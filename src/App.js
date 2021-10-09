import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      string: "Hi Ramya"
    }
  }
  render(){
    return (
      <>
      <h1> {this.state.string}</h1>
      <button onClick={() => this.setState({string: "Hello Ramya, Congrats on your new job!"})}>
        Change Text
      </button>
      </>

    ) 
  }
}

export default App;
