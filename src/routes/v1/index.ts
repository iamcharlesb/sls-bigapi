
import { Router } from 'express';

import books from './books.route';
import sessionRouter from './session.route';

const router = Router();

router.use('/books', books);
router.use('/auth', sessionRouter);

export default router;