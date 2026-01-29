import { Router } from "express";
import { supabase } from "../client/supabase-client.js";

const router = Router();

// post, update, delete

router.get("/", async (req, res) => {
  const name = req.body.name;

  const { data, error } = await supabase
    .from("foods")
    .select("*")
    .where("name", name);

  if (error) {
    return res.status(200).send("There was an error retrieving data, " + error);
  }

  return res.status(200).send({ success: true, data: data });
});

export default router;
