const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) =>
  res.send(
    "Hello World from devops with AWS! This is a sample application deployed to AWS Elastic Beanstalk"
  )
);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
