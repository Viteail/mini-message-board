import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(express.static(path.join(process.cwd(), "public")));

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
