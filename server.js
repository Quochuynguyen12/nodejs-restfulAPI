const express = require("express");
const app = express();
const port = 5000;
var router = require("./src/routers/apiRouter");

app.use("/api/v1", router);
app.use("/admin/v1", router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})