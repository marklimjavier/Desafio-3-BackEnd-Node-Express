import { Router } from 'express'
import { miIndex } from '../controllers/likemeController.js'

const miRuta = Router()

miRuta.get('/', miIndex)

export default miRuta