import React, { Component } from 'react';
import {addTask, fetchTasks} from '../../../actions';
import {connect} from 'react-redux';
import styled from 'styled-components';

const StyledForm = styled.form`
  flex-direction: column;
  min-height: 40rem;
  display: ${props => props.visible ? 'flex' : 'none'};

  & input, & textarea   {
    margin: .9rem 0;
  }
  
`

const AddButton = styled.button`
  border: none;
  background-color: #27ae60;
  color: #ecf0f1;
  min-height: 2rem;

`

class ToDoNew extends Component {

  state = {title: '', body: ''}

  handleTitleChange = event => {
    this.setState({ title: event.target.value })
  }

  handleBodyChange = event => {
    this.setState({ body: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault();

    await this.props.addTask({title: this.state.title, body: this.state.body})

    this.props.fetchTasks()
    this.setState({title: '', body: ''})
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <StyledForm action="#" method="get" onSubmit={this.handleSubmit} visible= {this.props.visible}>
          <input type="text" name="Title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/>
          <textarea name="body" cols="35" rows="5" placeholder="Body" value={this.state.body} onChange={this.handleBodyChange}></textarea>
          <AddButton type="submit">Add task</AddButton>
        </StyledForm>
      </div>
    )
  }
}


export default connect(null, {addTask, fetchTasks})(ToDoNew);