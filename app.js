import express from 'express'
import router from './routes/index.js'
const app = express()


function logRequest({ method, url }, res, next) {
    console.log(`[${new Date().toISOString()}] ${method} ${url}`);
    next()
}

app.use(express.json())
app.use(logRequest)
app.use(router)





export default app
