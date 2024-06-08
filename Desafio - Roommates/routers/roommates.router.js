import { Router } from "express";
import { roommateController } from "../controllers/roommates.controller.js";

const router = Router()

// PATH /roommate POST: Almacena un nuevo roommate ocupando random user.
router.post('/', roommateController.addRoommate)

// PATH /roommate GET: Devuelve todos los roommates almacenados.
router.get('/', roommateController.getAllRoommates)

export default router