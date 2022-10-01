import { Router } from 'express'
import * as venuesCtrl from '../controllers/venue.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', venuesCtrl.index)

router.post('/', isLoggedIn, venuesCtrl.create)

export {
  router
}