import express from "express";
import serverless from "serverless-http";
import userRouter from "../../server/src/routes/userRoutes.js";
import competitionRouter from "../../server/src/routes/competitionRoutes.js";
import newsRouter from "../../server/src/routes/newsRoutes.js";
import cors from "cors";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const api = express();
const corsOptions = {
  origin: ["https://www.esmaogretmen.com", "https://esmaogretmen.com"], // İzin verilen originler
  methods: ["GET", "POST", "PUT", "DELETE"], // İzin verilen metodlar
  allowedHeaders: ["Content-Type", "Authorization"], // İzin verilen başlıklar
  credentials: true,
};
const auth = getAuth();


api.use(cors(corsOptions));
api.use(express.json());
api.use(express.urlencoded({ limit: "50mb" }));

api.use("/api/user/login", async (req, res, next) => {
  try {
    const credentials = req.body;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    const user = userCredential.user;
    res.status(200).send(user);
  } catch (error) {
    res.status(405).send(error);
  }
});
api.use("/api/", competitionRouter);
api.use("/api/", newsRouter);

export const handler = serverless(api);