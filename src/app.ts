import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send({ message: 'Hello World' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log('Error middleware', err.message);
    return res.status(500).json({ message: 'Something broke!' });
});

export default app;
