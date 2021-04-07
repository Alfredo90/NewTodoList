import React, { Component } from 'react'

 class Form extends Component {
     constructor(){
         super()
         this.state = {
             task: ''
         }
     }
    render() {
        return (
            <div>
                <form>
                    <input value={this.state.todo} placeholder="Type todo here.." type='text'/>
                    <button type='submit'>Add Todos</button>
                </form>
                
            </div>
        )
    }
}

export default Form
