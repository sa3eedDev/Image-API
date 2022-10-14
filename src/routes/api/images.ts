import { Router } from 'express';
import { resize, checkCache, checkInput } from '../../controllers/images';

const router = Router();

// use Middlewares to check input file, cache, resize
router.get('/', checkInput, checkCache, resize);

export default router;
