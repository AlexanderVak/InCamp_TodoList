import express from 'express'
import controller from '../controllers/taskController.js'
import RestfulRoutes from './restfulRoutes.js'
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
    console.log(req.listId);
    console.log(req.query.all);

    res.json(await controller.find(req.listId, req.query.all))
})
router.get('/:id', async (req, res) => {
    const currentId = parseInt(req.params.id)
    let result = await controller.findById(currentId, req.listId)
    if (result) {
        res.json(result)
    } else {
        res.status(404).end()
    }
})
router.post('/', async (req, res) => {
    res.json(await controller.create(req.body))
})

router.put('/:id', async (req, res) => {
    const currentId = parseInt(req.params.id)
    res.json(await controller.replace(currentId,req.listId, req.body))

})

router.patch('/:id', async (req, res) => {
    const currentId = parseInt(req.params.id)
    res.json(await controller.updateById(currentId, req.listId,  req.body))
})

router.delete('/:id', async (req, res) => {
    const currentId = parseInt(req.params.id)
    controller.removeById(currentId, req.listId)
    res.status(200).end()
})

export default router