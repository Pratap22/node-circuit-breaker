import { Request, Response } from "express";

const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  if (false) {
    res.status(200).send("Success!");
  } else {
    res.status(400).send("Failed!");
  }
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
