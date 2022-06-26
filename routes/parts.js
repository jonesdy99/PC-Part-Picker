import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";

import * as partsCtrl from '../controllers/parts.js'

const router = Router()



router.get('/', partsCtrl.index)

router.get('/new', partsCtrl.new)

router.get('/:id', partsCtrl.show)

router.post('/', isLoggedIn, partsCtrl.create)

export{
  router
}