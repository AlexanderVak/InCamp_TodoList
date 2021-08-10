import express from 'express'
const router = express.Router()
import tasks from './task.js'
import lists from './list.js'
import dashboard from './dashboard.js'
import collection from './collection.js'

router
    .use('/lists/:listId/tasks', [(req, res, next) => { req.listId = req.params.listId; next() }], tasks)
    .use('/tasks', tasks)
    .use('/lists', lists)
    .use('/dashboard', dashboard)
    .use('/collection', collection)


export default router