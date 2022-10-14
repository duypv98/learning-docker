import express from "express";
import fs from "fs";
import path from "path";
import dotenv from "./utils/dotenv";
dotenv.config();

const PORT = Number(process.env.PORT || 8080);
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  res.send(`Hello World: ${process.env.MESSAGE || ""} - This is from build: ${process.env.BUILD_ARG}`);
});

app.get("/file", (req, res) => {
  const fileContent = fs.readFileSync(path.resolve(__dirname, "..", "data", "index.txt"), { encoding: "utf8" });
  res.json(fileContent);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);