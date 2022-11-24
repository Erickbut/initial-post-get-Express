const express = require('express')

const taskRouter = require('./Tasks/task.router')

//? Initial configs
const port = 9000
const app = express()
//? Habilitar recibir formato JSON
app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        message: 'OK'
    })
})

app.use('/', taskRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
