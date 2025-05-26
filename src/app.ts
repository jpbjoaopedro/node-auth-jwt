import express from 'express';
import cors, { CorsOptions } from 'cors';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

export function createApp () {
    const app = express();

    const corsOptions: CorsOptions = {
        origin: '*',
        methods:  ['GET', 'POST', 'PUT', 'DELETE'],
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use('/api', router)

    // Carrega documentação Swagger
    const swaggerDocument = YAML.load('./src/docs/swagger.yaml');

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    return app;
};