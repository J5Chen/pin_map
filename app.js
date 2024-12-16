const express = require("express");
const app = express();
const pinRouter = require("./routes/pinRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/pins", pinRouter);

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Pin app ${PORT}!`);
});