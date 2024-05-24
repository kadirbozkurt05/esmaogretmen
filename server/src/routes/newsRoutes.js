import express from "express";
import {
  createNews,
  getNews,
  updateNews,
  deleteNews,
} from "../controllers/newsController.js"

const newsRouter = express.Router();

newsRouter.post("/news/create", createNews);
newsRouter.get("/news/all", getNews);
newsRouter.put("/news/:id", updateNews);
newsRouter.delete("/news/delete/:id", deleteNews);

export default newsRouter;
