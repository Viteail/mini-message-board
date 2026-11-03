import express from "express";
import path from "path";

import { messageRouter } from "./routes/messages";

import { RenderData } from "./types/types";

import { messages } from "./db";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/message", messageRouter);

app.get("/", (req, res) => {
  const renderData: RenderData = {
    title: "Mini Messageboard",
    messages: messages,
  };

  res.render("index", renderData);
});

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
