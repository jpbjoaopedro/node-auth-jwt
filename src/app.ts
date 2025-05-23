import express from 'express';
import cors, { CorsOptions } from 'cors';
import { router } from './routes';

export function createApp () {
    const app = express();

    const corsOptions: CorsOptions = {
        origin: '*',
        methods:  ['GET', 'POST', 'PUT', 'DELETE'],
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use('/api', router)

    return app;
};