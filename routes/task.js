import express from 'express'
import controller from '../controllers/taskController.js'
import RestfulRoutes from './restfulRoutes.js'
const router = express.Router()

RestfulRoutes(router, controller)
    .read(
        [(req, res, next) => { req.listId = req.query.listId; next() }],
        [(req, res, next) => { req.listId = req.params.listId; next() }]
    )
    .write()

export default router