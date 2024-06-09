import express from 'express'
import cors from 'cors'
import { logger } from 'logger-express'
import miRuta from './src/routes/likemeRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(logger())
app.use(cors())
app.use(express.json())

app.get('/posts', miRuta)
app.get('/posts/:id', miRuta)
app.post('/posts', miRuta)
app.put('/posts/like/:id', miRuta)
app.delete('/posts/:id', miRuta)






app.listen(PORT, console.log(`levantando servidor http://localhost:${PORT}/posts`))
