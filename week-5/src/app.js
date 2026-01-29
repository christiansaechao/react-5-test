import express from "express";
import AnimalRouter from "./routes/animals.routes.js";
import FoodsRouter from "./routes/foods.routes.js";
import cors from "cors";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/animals", AnimalRouter);
app.use("/foods", FoodsRouter);

export default app;
