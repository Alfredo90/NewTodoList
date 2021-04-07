const express = require('express')
const ctrl = require ('./controller.js')

const app = express()

// Top Level Middleware-- Json parser
app.use(express.json())


//ENDPOINTS
app.get('/api/todos', ctrl.getTodos)
app.post('/api/todos', ctrl.addTodo)
app.put('/api/todos:id', ctrl.completeTodo)
app.get('/api/todos:id', ctrl.deleteTodo)


const port = 4000
app.listen(port, () => console.log(`Listening on port ${port}`))