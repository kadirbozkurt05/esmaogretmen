import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import userRouter from "../../src/routes/userRoutes.js";
import competitionRouter from "../../src/routes/competitionRoutes.js";
import newsRouter from "../../src/routes/newsRoutes.js";


const api = express();

api.use(cors({
    origin: 'https://www.esmaogretmen.com', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true
  }));
api.use(express.json());
api.use(express.urlencoded({ limit: '50mb' }));

api.use("/api", userRouter);
api.use("/api", competitionRouter);
api.use("/api", newsRouter);


export const handler = serverless(api);
