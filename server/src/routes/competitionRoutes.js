import express from "express";
import {
  createCompetition,
  getCompetitions,
  updateCompetition,
  deleteCompetition,
} from "../controllers/competitionController.js";

const competitionRouter = express.Router();

competitionRouter.post("/competition/create", createCompetition);
competitionRouter.get("/competition/all", getCompetitions);
competitionRouter.put("/competition/:id", updateCompetition);
competitionRouter.delete("/competition/delete/:id", deleteCompetition);

export default competitionRouter;
