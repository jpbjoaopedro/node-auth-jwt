import express from 'express';
import cors, { CorsOptions } from 'cors';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import cookieParser from 'cookie-parser'

export function createApp () {
    const app = express();

    const corsOptions: CorsOptions = {
        origin: '*',
        methods:  ['GET', 'POST', 'PUT', 'DELETE'],
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(cookieParser())
    app.use('/api', router)

    const swaggerDocument = YAML.load('./src/docs/swagger.yaml');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    return app;
};