import { Request, Response } from 'express';

const homeController = (req: Request, res: Response) => {
    res.render('index', { title: 'Express', vContent: 'contents/home' });
}

export default homeController;