import express from "express";
import path from "path";
import { messageRouter } from "./routes/messages.js";
import { errorHandler, NotFoundError } from "./custom-errors/errors.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", messageRouter);

app.use((req, res, next) => {
  next(new NotFoundError("Route not found"));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
