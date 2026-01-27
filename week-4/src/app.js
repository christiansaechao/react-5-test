import express from "express";
import cors from "cors";
import "dotenv/config";
import UserRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", UserRouter);

app.get("/", (req, res) => {
  res.send({ msg: "Health Check" });

  const updatedUser = users.map((user) => {
    if (user.username === userObj.username) {
        const newUser = {...user, userObj.email}
        return newUser;
    } else {
        return user;
    }
  })
});



export default app;
