import express from 'express'
const app = express()
const port = 3000

function logRequest({ method, url }, res, next) {
    console.log(`[${new Date().toISOString()}] ${method} ${url}`);
    next()
}

app.use(express.json())
app.use(logRequest)

const tasks = [{ id: 1, title: 'First task' }, { id: 2, title: 'Second task' }]
app.get('/tasks', (req, res) => { res.json(tasks) })

app.post('/tasks', (req, res) => {
    const task = req.body
    tasks.push(task)
    res.json(task)
})

app.patch('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const task = tasks.find(t => t.id === taskId)
    if (task) {
        Object.assign(task, req.body)
        res.json(task)
    } else {
        res.status(404).json({ error: 'Task not found' })
    }
})

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})
