import { Request, Response } from 'express';

const loginController = (req: Request, res: Response) => {
    res.render('index', { title: 'Login', vContent: 'auth/login' });
}

export default loginController;