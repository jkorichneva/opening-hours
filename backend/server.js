const express = require("express");
const app = express();
const cors = require("cors");
const hours = require("./hoursMock.json");

// used classic express, because next has issues with different node versions when serving json
app.use(cors());
app.get("/openingHours", (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.send(hours);
});

const listener = app.listen(5000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
