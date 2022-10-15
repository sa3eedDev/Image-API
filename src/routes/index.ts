import { Router } from 'express';
import express from 'express';
import imagesRouter from './api/images';

const router = Router();

// Router for images API
router.use('/api/images', imagesRouter);
// Defualt homepage
router.get('/', (req: express.Request, res: express.Response) : void => {
  res.send(
    'For image resizing go to /api/images?filename=[FILENAME]&width=[WIDTH]&height=[HEIGHT]'
  );
});

export default router;
