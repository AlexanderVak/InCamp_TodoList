import express from 'express'
import controller from '../controllers/taskController.js'
import RestfulRoutes from './restfulRoutes.js'
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
    console.log(req.listId);
    res.json(await controller.find(req.listId))
})

RestfulRoutes(router, controller)
    .read()
    .write()

export default router