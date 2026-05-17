//Post Route for Contact Page:-
import express from "express";
import { contactMessage } from "../controllers/contactController.js";
const router = express.Router();


router.post("/contact", contactMessage);

export default router;



