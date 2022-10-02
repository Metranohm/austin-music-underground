import { Router } from "express"
import * as venuesCtrl from "../controllers/venues.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get("/", venuesCtrl.index)

router.post("/", isLoggedIn, venuesCtrl.create)

router.get("/new", isLoggedIn, venuesCtrl.new)

router.get("/venues/:id", venuesCtrl.show)

export {
  router
}