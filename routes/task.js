import express from 'express'
import controller from '../controllers/taskController.js'
import RestfulRoutes from './restfulRoutes.js'
const router = express.Router()

const taskFromQuery = 
router.use('/', (req, res) => {
    let listsId = Number(req.query.listsId)
    
    console.log();


})

RestfulRoutes(router, controller)
    .read(taskFromQuery)
    .write()
    

export default router