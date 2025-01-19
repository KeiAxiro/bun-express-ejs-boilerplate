import { Request, Response } from 'express';

const loginMiddleware = (req: Request, res: Response) => {
    res.redirect('/');
}

export default loginMiddleware;