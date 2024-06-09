import * as sql from '../models/model.js'

const getPosts = (req, res) => sql.obtenerTabla()
.then((result) => res.status(200).json({ status: true, code: 200, message: result }))
.catch((error) => res.status(500).json({ status: true, code: 500, message: error }))

const getPostsId = (req, res) => sql.obtenerIdTabla(req.params.id)
.then((result) => res.status(200).json({ status: true, code: 200, message: result }))
.catch((error) => res.status(500).json({ status: true, code: 500, message: error }))

const postPosts = (req, res) => sql.nuevoPost(req.body.titulo, req.body.img, req.body.descripcion)
.then((result) => res.status(201).json({ status: true, code: 200, message: result }))
.catch((error) => res.status(500).json({ status: true, code: 500, message: error }))

const uptadePosts = (req, res) => {
    const postId = req.params.id
    sql.actualizarLikes(postId)
      .then((result) => { res.status(200).json({ status: true, code: 200, message: 'Like actualizado correctamente', data: result }) })
      .catch((error) => { res.status(500).json({ status: false, code: 500, message: error }) })
  }

const deletePosts = (req, res) =>
    sql.borrarPost(req.params.id)
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json({ status: true, code: 200, message: 'Post eliminado correctamente' })
        } else {
          res.status(404).json({ status: false, code: 404, message: 'No se encontró el post para eliminar' })
        }
      })
      .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export { getPosts, getPostsId, postPosts, uptadePosts, deletePosts }