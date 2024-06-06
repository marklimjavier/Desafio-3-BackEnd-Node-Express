import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DATA_DATABASE, DATA_HOST, DATA_PASSWORD, DATA_PORT, DATA_USER } = process.env;

const config = {
  user: DATA_USER,
  password: DATA_PASSWORD,
  host: DATA_HOST,
  port: DATA_PORT,
  database: DATA_DATABASE,
  allowExitOnIdle: true
};

const { Pool } = pkg;
const pool = new Pool(config);

const pruebaTabla = async () => {
  try {
    const demostracion = await pool.query("SELECT NOW()");
    const fechaHoraActual = demostracion.rows[0].now;
    console.log("Fecha y hora actual:", fechaHoraActual);
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
  }
};

export const postgresTabla = (query, values) => pool.query(query, values)
  .then(({ rows }) => rows)
  .catch(({ code, message }) => {
    const error = { status: false, code, message };
    throw error;
  });
