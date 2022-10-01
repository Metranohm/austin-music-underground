import { Router } from 'express'
import * as venuesCtrl from '../controllers/venues.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', venuesCtrl.index)

router.post('/', isLoggedIn, venuesCtrl.create)

export {
  router
}