import { Router } from 'express'
import { getPosts, getPostsId, postPosts, uptadePosts, deletePosts } from '../controllers/likemeController.js'

const miRuta = Router()

miRuta.get('/posts', getPosts)
miRuta.get('/posts/:id', getPostsId)
miRuta.post('/posts', postPosts)
miRuta.put('/posts/like/:id', uptadePosts)
miRuta.delete('/posts/:id', deletePosts)


export default miRuta