import express from 'express'
import controller from '../controllers/listController.js'
import RestfulRoutes from './restfulRoutes.js'
const router = express.Router()

RestfulRoutes(router, controller)
    .crud()
export default router