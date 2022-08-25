import express from "express";
import dotenv from "./utils/dotenv";
dotenv.config();

const PORT = Number(process.env.PORT || 8080);
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  res.send(`Hello World: ${process.env.MESSAGE || ""}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);