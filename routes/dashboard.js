import express from 'express'
import controller from '../controllers/dashboardController.js'
const router = express.Router()

router.get('/', async (req, res) => {
    res.json(await controller.find())
})
export default router