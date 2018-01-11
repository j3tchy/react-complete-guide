import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 1, name: 'Max', age: 28},
        { id: 2, name: 'Jerms', age: 28},
        { id: 3, name: 'Jay', age: 21}
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()' );
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Upate App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
      console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update App.js] Inside componentDidUpdate');  
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
      return p.id === id;
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
    console.log('[App.js] Inside render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} />
      );
    }



    return (
      <div className={classes.App}>
      <button onClick={() => {this.setState({ showPersons: true })}}>Show Persons</button>
        <Cockpit 
          persons={this.state.persons} 
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler }/>
        {persons}
      </div>
    );
  }
}

export default App;
