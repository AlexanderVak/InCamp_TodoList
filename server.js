import app from './app.js'

const port = 3500

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})