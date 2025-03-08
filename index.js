import express from "express";
import cors from "cors";
import fs from "fs";

export const app = express();

app.use(
  cors({
    origin: true,
    methods: "GET,PUT,POST,DELETE,OPTIONS",
    credentials: true,
    allowedHeaders: "Content-Type, Accept",
  })
);

app.use(express.static("frontend"));

app.listen(7778, () => {
  console.log("Server is running on port 7778");
});

app.get("/images", (req, res) => {
  fs.readdir(`./frontend/images`, (err, files) => {
    if (err) {
      console.log(err);
      return res.end();
    }

    res.send(files);
  });
});
