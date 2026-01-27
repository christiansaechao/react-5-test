import express from "express";

// localhost:5000/params?query
// body {
// animal: data
// }

// initialize express application
const app = express();

app.use(express.json());

// fake database
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

// localhost:5000/1
app.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ msg: `Got the user id ${id}` });
});

app.get("/animal", (req, res) => {
  res.send({ success: true, data: animals });
});

app.post("/", (req, res) => {
  const newAnimal = req.body;
  animals.push(newAnimal);
  res.status(201).send({ success: true, data: animals });
});

// delete an animal by id coming from the request
// req.id === animal.id in our array remove it from the array

app.delete("/:id", (req, res) => {
  const { id } = req.params;
});

app.listen(5000, () => console.log("Server running on port 5000"));
