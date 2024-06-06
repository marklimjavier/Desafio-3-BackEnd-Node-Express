import { postgresTabla } from '../database/config.js';

export const obtenerTabla = () => postgresTabla('SELECT * FROM posts;');

export const obtenerIdTabla = (id) => postgresTabla('SELECT * from posts WHERE id = $1;', [id]);

export const nuevoPost = (titulo, img, descripcion) => 
    postgresTabla('INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES (DEFAULT, $1, $2, $3, 0) RETURNING *;', [titulo, img, descripcion]);

export const actualizarPost = (id, { titulo, img, descripcion }) => 
    postgresTabla('UPDATE posts SET titulo = $2, img = $3, descripcion = $4 WHERE id= $1 RETURNING *;', [id, titulo, img, descripcion]);

export const borrarPost = (id) => postgresTabla( 'DELETE FROM posts WHERE id = $1 RETURNING *;', [id] );