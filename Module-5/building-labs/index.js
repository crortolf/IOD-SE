const express = require("express");
const app = express();
const testRoutes = require("./routes/myTestRoutes");

app.use("/", express.static("public"));
app.use("/mytest", testRoutes);

app.listen(80, () => console.log("listening on 80"));
