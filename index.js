import express from "express";
import cors from "cors";
import fs from "fs";

export const app = express();

const PORT = process.env.PORT || 3000; 

app.use(
  cors({
    origin: true,
    methods: "GET,PUT,POST,DELETE,OPTIONS",
    credentials: true,
    allowedHeaders: "Content-Type, Accept",
  })
);

app.use(express.static("frontend"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/images", (req, res) => {
  fs.readdir(`./frontend/images`, (err, files) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading images directory");
    }

    res.send(files);
  });
});
