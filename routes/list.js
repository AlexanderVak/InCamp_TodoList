import express from 'express'
import controller from '../controllers/listController.js'
import RestfulRoutes from './restfulRoutes.js'
const router = express.Router()

const allTasksFromList = 
router.use('/:listId/tasks', (req, res) => {
    let listId = Number(req.params.listId)
    res.json(controller.findById(listId).tasks)
})
const oneTaskFromList = 
router.use('/:listId/tasks/:taskId', (req, res) => {
    let listId = Number(req.params.listId)
    let taskId = Number(req.params.taskId)
    console.log(taskId);
    res.json(controller.findById(listId).tasks.findById(taskId))
})

RestfulRoutes(router, controller)
    .read(allTasksFromList)
    .write()

export default router