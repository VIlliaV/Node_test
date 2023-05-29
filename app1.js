const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   res.send("Hello World!");
//   console.log("Наше проміжне ПЗ");
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Test World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

// app.get("/contact/:id", (req, res) => {
//   res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
// });

app.get("/contact/", (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.query}`);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
