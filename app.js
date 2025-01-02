const express = require("express");
const app = express();
const cors = require('cors');
const pinRouter = require("./routes/pinRouter");
const userRouter = require("./routes/userRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/pins", pinRouter);
app.use("/users", userRouter);

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Pin app ${PORT}!`);
});