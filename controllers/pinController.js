const db = require("../db/queries")

async function postPin(req, res) {
    const result = await db.createPin(req.body.longitude, req.body.latitude, req.body.userId)
    res.redirect("/pins")
}

async function getAllPins(res) {
    const pins = await db.findAllPins();
    res.send(pins);
}

async function getPinsByUser(req, res) {
    const userId = req.params.userId;
    const pins = await db.findPinsByUser(userId);
    res.send(pins);
}

async function deletePinById(req, res) {
    const pinId = req.params.pinId;
    const pins = await db.removePinById(pinId);
    res.redirect("/pins");
}

module.exports = { getAllPins, getPinsByUser, deletePinById, postPin }