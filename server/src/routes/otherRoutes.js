import express from "express";
import { apply, contact, newsletter } from "../controllers/otherController.js";

const otherRouter = express.Router();

otherRouter.post("/apply", apply);
otherRouter.post("/newsletter", newsletter);
otherRouter.post("/contact", contact);


export default otherRouter;
