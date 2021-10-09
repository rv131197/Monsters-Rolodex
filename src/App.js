import React, {Component} from 'react';
import { CardListComponent } from './components/card-list/card-list.componenet';
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      monsters: [
        {
          name: "Ramya",
          id: 1
        },
        {
          name: "Sriraksha",
          id: 2
        },
        {
          name: "Swathi",
          id: 3
        }
      ]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    return (
      <div className ='App'>
        <CardListComponent>
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
          </CardListComponent>
      </div>
    ) 
  }
}

export default App;
