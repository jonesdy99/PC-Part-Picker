import { Router } from "express";
const router = Router()
import * as partsCtrl from '../controllers/parts.js'

router.get('/', partsCtrl.index)

export{
  router
}