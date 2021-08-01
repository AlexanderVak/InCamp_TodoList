import express from 'express'
import controller from '../controllers/taskController.js'
const router = express.Router()



router.get('/', (req, res) => { res.json(controller.find()) })

router.post('/', (req, res) => {
    const task = controller.create(req.body)
    res.status(201).json(task)
})

router.patch('/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const task = controller.findById(taskId, req.body)
    if (task) {
        res.json(task)
    } else {
        res.status(404).json({ error: 'Task not found' })
    }
})

export default router