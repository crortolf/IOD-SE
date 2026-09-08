const express = require("express");
const app = express();
const store = require("./routes/store");

app.use("/", express.static("public"));
app.use("/store", store);

app.listen(80, () => console.log("listening on 80"));
