const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.error("Error in running the app : ", err);
    return;
  }
  console.log("Server is listening on the port : ", port);
});
