import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Max',
        age: 28
      },{
        id: 2,
        name: 'Jerms',
        age: 28
      },{
        id: 3,
        name: 'Jay',
        age: 21
      }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.userId === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ 
      showPersons: !doesShow
    });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person  
                      name={person.name} 
                      age={person.age} 
                      click={() => this.deletePersonHandler(index)}
                      changed={(event) => this.nameChangedHandler(event, person.id)} 
                      key={person.id} />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App!!</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p> 
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
