import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";

import * as partsCtrl from '../controllers/parts.js'

const router = Router()



router.get('/', partsCtrl.index)

router.get('/new', partsCtrl.new)

router.get('/:id', partsCtrl.show)

router.get('/:id/edit', isLoggedIn, partsCtrl.edit)

router.post('/', isLoggedIn, partsCtrl.create)

router.put('/:id', isLoggedIn, partsCtrl.update)

router.delete('/:id', isLoggedIn, partsCtrl.delete)

router.post('/:id/reviews', isLoggedIn, partsCtrl.createReview)

router.delete('/review/:id', isLoggedIn, partsCtrl.deleteReview)


export{
  router
}