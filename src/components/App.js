import React, { Component } from 'react';
import styled from 'styled-components'

import ToDoNew from './toDo/form/ToDoNew'
import ToDoList from './toDo/ToDoList';


const HomePage = styled.div`
  display: flex;
  justify-content: space-around;
`
const AddButton = styled.button`
  width: 5rem;
  height: 5rem;
  text-align: center;
  border-radius: 50%;
  outline: none;
  background-color: #3498db;
  color: #ecf0f1;
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  border: none;
  font-size: 4rem;
  `

class App extends Component {
  state= {formVisible: false}

  toggleVisibility = () => {
    console.log('jarl')
    this.setState({formVisible: !this.state.formVisible})
  }

  render() {
    return (
      <HomePage>
       <ToDoList />
       <ToDoNew visible={this.state.formVisible}/>
       <AddButton onClick={this.toggleVisibility}>+</AddButton>
      </HomePage>
    )
  }
}

export default App;