import TodoListItem from './ToDoListitem'
import React from 'react'
import './App.css'
class ToDoList extends React.Component {
    render() {
        var items = this.props.items.map((item, index) => {
            return (
              <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} TodoDone={this.props.TodoDone} />
            );
          });
          return (
            <ul className="list-group"> {items} </ul>
          );
    }
}
export default ToDoList;