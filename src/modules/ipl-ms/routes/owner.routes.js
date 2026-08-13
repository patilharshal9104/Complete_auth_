import { Router } from "express";
import * as controller from "../controllers/owner.controller.js";
//questions -: router.post vs app.post -: app.post means we wanted to keep logic only in a one app we dont wanted to separate anything and for separation we use router.post()

const router = Router();

//Create a new owner
router.post("/", controller.createOwner);

//get all owners
router.get("/", controller.getAllOwners);

//get owner by id
router.get("/:id", controller.getOwnerById);

//update owner
router.put("/:id", controller.updateOwner);

//delete owner
router.delete("/:id", controller.deleteOwner);

export default router;
