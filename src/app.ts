import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/router";

dotenv.config();

const app = express();

// ------------------ Config ------------------
app.set("port", process.env.PORT ?? 3001);
// TODO: investigar sobre CORS
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
