const db = require("../db/queries")

async function postPin(req, res) {
    console.log(req.body);
    const result = await db.createPin(req.body.longitude, req.body.latitude, req.body.user_id)
    res.redirect("/pins")
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