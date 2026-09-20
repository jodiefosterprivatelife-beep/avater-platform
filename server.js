
const express = require("express");
2

3
const app = express();
4

5
app.use(express.static("public"));
6

7
app.listen(3000, () => {
    8
    console.log("Server running on port 3000");
    9
});