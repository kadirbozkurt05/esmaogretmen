import express from "express";
import cors from "cors";
import { config } from "./config.js";
import userRouter from "./routes/userRoutes.js";
import competitionRouter from "./routes/competitionRoutes.js";
import bodyParser from "body-parser";
import newsRouter from "./routes/newsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb' }));

app.use("/api", userRouter);
app.use("/api", competitionRouter);
app.use("/api", newsRouter);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.host_url}`)
);
