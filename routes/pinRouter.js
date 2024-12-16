const { Router } = require("express");
const pinRouter = Router();
pinRouter.get("/", (req, res) => res.send('pins'));

module.exports = pinRouter;