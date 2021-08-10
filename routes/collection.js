import express from 'express'
import controller from '../controllers/collectionController.js'
const router = express.Router()

router.get('/today', async (req, res) => {
    res.json(await controller.find())
})
export default router