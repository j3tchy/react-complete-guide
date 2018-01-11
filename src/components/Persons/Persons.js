import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
      }
    
      componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()' );
      }
    
      componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
      }

      componentWillReceiveProps(nextProps) {
          console.log('[Update PERSONS.js] Inside componentWillReceiveProps', nextProps);
      }

      shouldComponentUpdate(nextProps, nextState) {
        console.log('[Upate PERSONS.js] Inside shouldComponentUpdate', nextProps, nextState);
        // return true;
        return nextProps.persons !== this.props.persons;
      }

      componentWillUpdate(nextProps, nextState) {
          console.log('[Update PERSONS.js] Inside componentWillUpdate', nextProps, nextState);
      }

      componentDidUpdate() {
        console.log('[Update PERSONS.js] Inside componentDidUpdate');  
      }

    render() {
        console.log('[Persons.js] Inside render()');
        return (
            this.props.persons.map((person, index) => {
                return <Person  
                          name={person.name} 
                          age={person.age} 
                          click={() => this.props.clicked(index)}
                          changed={(event) => this.props.changed(event, person.id)} 
                          key={person.id} />
              })
        )
    }
}

export default Persons;