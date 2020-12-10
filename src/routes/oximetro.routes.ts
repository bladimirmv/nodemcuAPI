import { Router } from 'express';

import { addOximetro, getOximetro } from './../controllers/oximetro.controller';
const router = Router();

router.route('/')
	.get(getOximetro)
	.post(addOximetro);

// router.route('/:id')
// 	.get(

// 	)
// 	.put(

// 	)
// 	.delete(
// 	);

export default router;