import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTasks} from '../../actions'

import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  async componentDidMount() {
    await this.props.fetchTasks();
  }

  renderTasks = () => this.props.tasks.map(task => <ToDoItem key={task._id} _id={task._id}>{task.title}</ToDoItem>)
  

  render() {
    console.log(this.props)
    if(this.props.tasks) {
      return (
        <ul>
          {this.renderTasks()}
        </ul>
      )
    } else {
      return 'Loading...'
    }
  }
}

function mapStateToProps({ tasks }) {
  return { tasks };
}

export default connect(mapStateToProps, {fetchTasks})(ToDoList) ;