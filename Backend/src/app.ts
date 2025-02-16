import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import syncDatabase from './utils/syncDB.js';
import cors from 'cors';
import morgan from 'morgan';
import { userRouter } from './routes/user.routes.js';

const app: Application = express();

dotenv.config();

// * Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// * Middlewares...
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// * Iniciando la DB...
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

// ? Ruta de testeo...
app.get('/api', (req: Request, res: Response) => {
    res.json({ message: 'Api working...!!!' });
});

// * Routes...
app.use('/api/users', userRouter);

export default app;
