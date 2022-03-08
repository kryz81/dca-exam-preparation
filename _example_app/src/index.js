const express = require("express");
const { v4 } = require("uuid");

const APP_PORT = process.env.APP_PORT;
const APP_INSTANCE_UNIQUE_ID = v4();

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Hello",
    id: APP_INSTANCE_UNIQUE_ID,
    env: process.env.NODE_ENV,
  });
});

app.listen(APP_PORT, () => console.log(`Listening on ${APP_PORT}`));
