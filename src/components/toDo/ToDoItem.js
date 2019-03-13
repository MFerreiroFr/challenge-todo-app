import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {deleteTask, fetchTasks} from '../../actions'

const ItemContainer = styled.div`
  min-width: 30rem;
  display: flex;
  justify-content: space-between;
  margin: 1.6rem 0;
  background-color: #3498db;
  color: #ecf0f1;
  padding: 1rem 0.5rem;
`
const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: #ecf0f1;
  border: none;
  outline: none;
  width: 5rem;
  
`
class ToDoItem extends Component {

   handleDelete = async () => {
    await this.props.deleteTask(this.props._id)
    this.props.fetchTasks();
  }
  render() {
    return (
      <ItemContainer>
        <div>{this.props.children}</div>
        <DeleteButton onClick={this.handleDelete}>Delete</DeleteButton>

      </ItemContainer>
    )
  }
}

export default connect(null, {deleteTask, fetchTasks})(ToDoItem) ;