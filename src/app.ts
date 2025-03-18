import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';

const app: Application = express();

// parser
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

app.use('/api/v1', router);

// check server health
app.get('/', (req, res) => {
  res.send('Server is running...');
});

export default app;
