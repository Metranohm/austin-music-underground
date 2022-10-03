import { Router } from "express"
import * as venuesCtrl from "../controllers/venues.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get("/", venuesCtrl.index)

router.post("/", isLoggedIn, venuesCtrl.create)

router.get("/new", isLoggedIn, venuesCtrl.new)

router.delete("/:id", isLoggedIn, venuesCtrl.delete)

router.get("/:id", venuesCtrl.show)

// router.get("/:id/edit", venuesCtrl.edit)

// router.put("/:id", venuesCtrl.update)

export {
  router
}