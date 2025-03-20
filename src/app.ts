import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';

const app: Application = express();

// parser
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: ['https://portfolio-dashboard-eta-six.vercel.app'], credentials: true }));

app.use('/api/v1', router);

// check server health
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// global error handler
app.use(globalErrorHandler);

// not found handler
app.use(notFound);

export default app;
