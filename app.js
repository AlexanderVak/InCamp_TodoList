import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

const tasks = [{ name: 'First task' }, { name: 'Second task' }]
app.get('/tasks', (req, res) => { res.json(tasks) })



app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})