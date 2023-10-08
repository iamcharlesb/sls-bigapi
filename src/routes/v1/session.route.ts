import { Request, Response, Router } from 'express';

const sessionRouter = Router();

sessionRouter.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).json([]);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

sessionRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

sessionRouter.post('/', async (req: Request, res: Response) => {
  try {
    res.status(201).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

sessionRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

sessionRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default sessionRouter;

