import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import userRouter from "../../src/routes/userRoutes.js";
import competitionRouter from "../../src/routes/competitionRoutes.js";
import newsRouter from "../../src/routes/newsRoutes.js";


const api = express();
const corsOptions = {
    origin: ['https://www.esmaogretmen.com', 'https://esmaogretmen.com'], // İzin verilen originler
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // İzin verilen metodlar
    allowedHeaders: ['Content-Type', 'Authorization'], // İzin verilen başlıklar
    credentials: true
  };

  api.use(cors(corsOptions));
api.use(express.json());
api.use(express.urlencoded({ limit: '50mb' }));

api.use("/api", userRouter);
api.use("/api", competitionRouter);
api.use("/api", newsRouter);


export const handler = serverless(api);
