import React, { Component } from 'react'
import axios from 'axios'
import Todo from './Todo'
export class Main extends Component {
    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        this.getTodos();
    }

    getTodos = () => {
        axios.get('/api/todos')
        .then( res => {
            this.setState({
                todos: res.data
            })
        }).catch (err => console.log(err))

    }
    render() {
        const mappedTodos = this.state.todos.map(todo => {
            return <Todo key={todo.id} todo={todo}/>
        })
        return (
            <div className='main'>
               {mappedTodos}
                
            </div>
        )
    }
}

export default Main

