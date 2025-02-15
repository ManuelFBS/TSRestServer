import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import syncDatabase from './utils/syncDB.js';
// ? import { productRoute } from './routes/product.routes'; // Cambiar por la ruta adecuada...

const app: Application = express();

dotenv.config();

// * Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// * Middlewares...
app.use(express.json());

// * Iniciando la DB...

/*
const initializeDB = async () => {
    try {
        // > Sincroniza la DB...
        await syncDatabase();
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing database:', error);
        process.exit(1); // > Salir con error si la sincronización falla...
    }
};
//
initializeDB();
*/

// ? Ruta de testeo...
app.get('/api', (req: Request, res: Response) => {
    res.json({ message: 'Api working...!!!' });
});

export default app;
