const express = require("express");
const app = express();
const port = 8080;
const userRouter = require("../server/routers/user.route");

app.set("view engine", "pug");

app.set("views", "./views");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index", { name: "DK25" });
});

app.use("/user", userRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
