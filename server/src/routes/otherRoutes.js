import express from "express";
import { apply, newsletter } from "../controllers/otherController.js";

const otherRouter = express.Router();

otherRouter.post("/apply", apply);
otherRouter.post("/newsletter", newsletter);


export default otherRouter;
