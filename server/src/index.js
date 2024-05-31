import express from "express";
import cors from "cors";
import { config } from "./config.js";
import userRouter from "./routes/userRoutes.js";
import competitionRouter from "./routes/competitionRoutes.js";
import newsRouter from "./routes/newsRoutes.js";
import otherRouter from "./routes/otherRoutes.js";

const app = express();

const corsOptions = {
  origin: ['https://www.esmaogretmen.com', 'https://esmaogretmen.com'], // İzin verilen originler
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // İzin verilen metodlar
  allowedHeaders: ['Content-Type', 'Authorization'], // İzin verilen başlıklar
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb' }));

app.use("/api", userRouter);
app.use("/api", competitionRouter);
app.use("/api", newsRouter);
app.use("/api", otherRouter);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.host_url}`)
);
