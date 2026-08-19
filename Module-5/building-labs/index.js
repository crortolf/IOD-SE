const express = require("express");
const app = express();
const testRoutes = require("./routes/myTestRoutes");
const calculator = require("./routes/calculator");

app.use("/", express.static("public"));
app.use("/mytest", testRoutes);
app.use("/calculator", calculator);

app.listen(80, () => console.log("listening on 80"));
