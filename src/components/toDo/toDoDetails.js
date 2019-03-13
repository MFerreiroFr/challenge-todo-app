import React, { Component } from 'react';
import { connect }  from 'react-redux';
import {fetchTask} from '../../actions';

class ToDoDetails extends Component {
  
  componentDidMount() {
    this.props.fetchTask(this.props._id)
  }

  render() {
    return (
      <div>
        <h3>{this.props.taskDetail.title}</h3>
        <p>{this.props.taskDetail.body}</p>
      </div>
    )
  }
}
function mapStateToProps({taskDetail}) {
  return { taskDetail }
}

export default connect(mapStateToProps, { fetchTask })(ToDoDetails)