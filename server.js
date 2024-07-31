const express = require("express");
const app = express();
const port = 5000;


app.get("/", (res, req) => {
    res.send("test nodemom");
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})