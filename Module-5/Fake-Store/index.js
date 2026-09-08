const express = require("express");
const app = express();
const store = require("./routes/store");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", express.static("public"));
app.use("/store", store);

app.listen(80, () => console.log("listening on 80"));
