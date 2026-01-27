import { Router } from "express";

const router = Router();

const users = [
  {
    username: "test",
    email: "test@email.com",
    age: 12,
  },
];

router.post("/", (req, res) => {
  const user = req.body;

  if (!userObj.username) {
    return res
      .status(200)
      .send({ msg: "Error no username was sent with the request" });
  }

  

  return res.status(201).send({ success: true, data: users, error: null });
});

export default router;
