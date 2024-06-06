SELECT * FROM likeme;
SELECT * from cursos WHERE id = $1;
INSERT INTO likeme (id, titulo, img, descripcion) VALUES (DEFAULT, $1, $2, $3) RETURNING *;
UPDATE likeme SET titulo = $2, img = $3, descripcion = $4 WHERE id= $1 RETURNING *;
DELETE FROM likeme WHERE id = $1 RETURNING *;