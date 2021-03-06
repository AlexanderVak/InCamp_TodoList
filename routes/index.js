import express from 'express'
const router = express.Router()
import tasks from './task.js'
import lists from './list.js'

router
    .use('/tasks', [(req, res, next) => { req.listId = req.query.listId; next() }], tasks)
    .use('/lists', lists)
    .use('/lists/:listId/tasks', [(req, res, next) => { req.listId = req.params.listId; next() }], tasks )


export default router