import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },{
        name: 'Jerms',
        age: 28
      },{
        name: 'Jay',
        age: 21
      }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // this.state.persons[0].name = 'Jermaine';
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        },{
          name: 'Jerms',
          age: 28
        },{
          name: 'Jay',
          age: 50
        }
      ] 
    }) 
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value , age: 28 },
        { name: 'Jay', age: 21 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App!!</h1>
        <button
          style={style} 
          onClick={() => this.switchNameHandler('Jermaine')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Jimmy!')} 
          changed={this.nameChangedHandler}>
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}  
        />
      </div>
    );
  }
}

export default App;
