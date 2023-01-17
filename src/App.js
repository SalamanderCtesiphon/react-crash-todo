import React, {Component} from "react";
import './App.css';
import Todos from './components/Todos';
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uniqid from "uniqid";

class App extends Component {
  state = {
    todos: [
        {
          id: uniqid(),
          title: 'Take out the trash',
          completed: false
        },
        {
          id: uniqid(),
          title: 'Dinner with wife',
          completed: false
        },
        {
          id: uniqid(),
          title: 'Meeting with boss',
          completed: false
        }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: uniqid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}

export default App
