import express from 'express'
import cors from 'cors'
import { logger } from 'logger-express'
import * as sql from './src/models/model.js'


const app = express()
const PORT = process.env.PORT || 3000 

app.use(logger())
app.use(cors())
app.use(express.json())

app.get( '/posts', (req, res) => sql.obtenerTabla()
    .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: true, code: 500, message: error}))
)

app.get( '/posts:id', (req, res) => sql.obtenerIdTabla(req.params.id)
    .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: true, code: 500, message: error}))
)

app.post( '/posts', (req, res) => sql.nuevoPost(req.body.titulo, req.body.img, req.body.descripcion)
    .then((result) => res.status(201).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: true, code: 500, message: error}))
)

app.put( '/posts:id', (req, res) => sql.actualizarPost(req.params.id, req.body.descripcion)
    .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: true, code: 500, message: error}))
)

//en el desafio no encontre nada de put lo que me parecio completamente raro, me falto pornerle el like e integrarle el put pero no se si hay que crearle el boton de modificar
//de todos modos me dieron problemas un par de cositas que quiero consultarle en la clase

app.delete('/posts/:id', (req, res) => 
    sql.borrarPost(req.params.id)
        .then((result) => {
            if (result.length > 0) {
                res.status(200).json({ status: true, code: 200, message: "Post eliminado correctamente" });
            } else {
                res.status(404).json({ status: false, code: 404, message: "No se encontró el post para eliminar" });
            }
        })
        .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
);


app.listen(PORT, console.log(`levantando servidor http://localhost:${PORT}/posts`))
