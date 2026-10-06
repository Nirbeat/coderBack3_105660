import {Router} from "express";
import { getQuantity, getPets, getUsers } from "../controllers/mocks.controller.js";
const router = Router();

router.use(getQuantity);

router.get("/mockingpets", getPets);

router.get("/mockingusers", getUsers);
export default router;