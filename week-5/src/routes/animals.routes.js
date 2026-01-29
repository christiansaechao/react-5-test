import { Router } from "express";

const router = Router();

// fake animal data base
const animals = [
  {
    id: 1,
    type: "bird",
    name: "Blue Jay",
    age: 12,
  },
  {
    id: 2,
    type: "cat",
    name: "Garfield",
    age: 6,
  },
  {
    id: 3,
    type: "lizard",
    name: "Charlie",
    age: 90,
  },
];

// localhost:{PORT}/animals/

router.get("/", (req, res) => {
  res.send({ success: true, data: animals });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ msg: `Got the user id ${id}` });
});

router.post("/", (req, res) => {
  const newAnimal = req.body;
  animals.push(newAnimal);
  res.status(201).send({ success: true, data: animals });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
});

export default router;
