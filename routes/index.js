import express from 'express'
const router = express.Router()
import tasks from './task.js'
import lists from './list.js'
import dashboard from './dashboard.js'
import collection from './collection.js'

router
    .use('/tasks', [(req, res, next) => { req.listId = req.query.listId; next() }], tasks)
    .use('/lists', lists)
    .use('/lists/:listId/tasks', [(req, res, next) => { req.listId = req.params.listId; next() }], tasks )
    .use('/dashboard', dashboard)
    .use('/collection', collection)


export default router