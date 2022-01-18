import { Router } from 'express';
import { addPainting, getPaintings } from '../controllers/paintingsController.js'
import { catchErrors } from '../helpers.js';

const router = new Router();

router.get('/paintings', catchErrors(getPaintings))


router.post('/painting', catchErrors(addPainting))

export default router;