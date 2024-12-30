const { Router } = require("express");
const { getAllPins, getPinsByUser, deletePinById, postPin } = require("../controllers/pinController");
const { postUser } = require("../controllers/userController");
const pinRouter = Router();

pinRouter.post("/", (req, res) => { postPin(req, res) });
pinRouter.get("/", (req, res) => getAllPins(req, res));
pinRouter.get("/:userId", (req, res) => getPinsByUser(req, res));
pinRouter.delete("/:pinId", (req, res) => deletePinById(req, res));

module.exports = pinRouter;