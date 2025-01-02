const db = require("../db/queries");
const userRouter = require("../routes/userRouter");

async function postPin(req, res) {
    try {
        const resultUser = await db.createUser(req.body.name);
        const resultPin = await db.createPin(req.body.longitude, req.body.latitude, resultUser);
        res.status(201).redirect("/pins");
    } catch (error) {
        res.status(400).send();
        console.error("problem posting");
    }
}

async function getAllPins(req, res) {
    const pins = await db.findAllPins();
    res.send(pins);
}

async function getPinsByUser(req, res) {
    const userId = req.params.userId;
    const pins = await db.findPinsByUser(userId);
    res.send(pins);
}

async function deletePin(req, res) {
    const pinId = req.params.pinId;
    const pins = await db.removePinById(pinId);
    res.redirect("/pins");
}

module.exports = { getAllPins, getPinsByUser, deletePin, postPin }