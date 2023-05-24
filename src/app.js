const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const bookRouter = require("./routes/book");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/book", bookRouter.routes);

app.get("/", (req, res) => {
  res.send("Book API");
});

const port = 30001;

app.listen(port, () => {
  console.log(`Howdy! Listening to port ${port}`);
});
