"use strict";
const express = require("express");
const app = express();
const fs = require("fs");
const week_data_filepath = `${__dirname}/data/week-data.json`;

let data = fs.readFileSync(week_data_filepath, "utf-8", (err) => {});
data = JSON.parse(data);

app.set("view engine", "ejs");
app.use(express.json());
app.use("/src", express.static(__dirname + "/src"));
// REST API
app.get("/api", (req, res) => {
  // make this part asynchronous
  const asyncData = function () {
    return new Promise((resolve, reject) => {
      fs.readFile(week_data_filepath, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          res.send(data);
          resolve(data);
        }
      });
    });
  };
  asyncData();
});

app.post("/api", (req, res) => {
  fs.writeFile(week_data_filepath, JSON.stringify(req.body), (err) => {});
  res.send("New Week updated");
});

// Render the home page
app.get("/" || "home", (req, res) => {
  res.render("home.ejs", { data: data });
});

// Run the server
const port = 4000;
app.listen(port, () => {
  console.log("Server running on port 127.0.0.1:" + port);
});
