const express = require("express");
const app = express();
const testRoutes = require("./routes/myTestRoutes");
const calculator = require("./routes/calculator");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/", express.static("public"));
app.use("/mytest", testRoutes);
app.use("/calculator", calculator);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(80, () => console.log("listening on 80"));
