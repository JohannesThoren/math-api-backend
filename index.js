require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const route_documentation = require("./static/route-documentation.json");

app.use(express.json())
app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use("/api/v1", require("./routes/api.js"));

app.get("/api/v1", (req, res) => {
  res.render("api", { docs: route_documentation });
});

app.listen(process.env.HTTP_PORT, () => {
  console.log("Listening on port " + process.env.HTTP_PORT);
});
