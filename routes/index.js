import express from 'express'
const router = express.Router()
import tasks from './task.js'
import lists from './list.js'

router
    .use('/tasks', tasks)
    .use('/lists', lists)
    .use('/lists/:listId/tasks', tasks)


export default router