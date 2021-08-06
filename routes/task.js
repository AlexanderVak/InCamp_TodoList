import express from 'express'
import controller from '../controllers/taskController.js'
import RestfulRoutes from './restfulRoutes.js'
const router = express.Router()

RestfulRoutes(router, controller)
    .read()
    .write()

export default router