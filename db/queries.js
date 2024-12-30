const pool = require('./pool');

//pin queries
async function createPin(longitude, latitude, userId) {
    const result = await pool.query(
    `
    INSERT INTO pins (longitude, latitude, user_id)
    VALUES ($1, $2, $3)
    RETURNING pin_id;
    `,
        [longitude, latitude, userId]
    );
    return result;
}

async function findAllPins() {
    console.log("test2");
    const { rows } = await pool.query("SELECT * FROM pins");
    return rows;
}

async function findPinsByUser(userId) {
    const { rows } = await pool.query("SELECT * FROM pins WHERE user_id = $1", [userId]);
    return rows;
}

async function removePinById(pinId) {
    const results = await pool.query("DELETE FROM pins WHERE pin_id = $1", [pinId]);
    return results;
}

//users queries
async function createUser(name) {
    const {rows} = await pool.query(
    `
    INSERT INTO users (name)
    VALUES ($1)
    RETURNING user_id;
    `,
        [name]
    );
    return rows[0].user_id;
}

async function findAllUsers() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

async function findUserById(userId) {
    const {rows} = await pool.query("SELECT * FROM users WHERE user_id = $1", [userId]);
    return rows;
}

async function updateUser(newName, userId) {
    console.log(newName, userId)
    const {rows} = await pool.query("UPDATE users SET name = $1 WHERE user_id = $2", [newName, userId]);
    return rows;
}

async function removeUser(userId) {
    const results = await pool.query("DELETE FROM users WHERE user_id = $1", [userId]);
    return results;
}

module.exports = {
    findAllPins,
    findPinsByUser,
    removePinById,
    createPin,
    createUser,
    findAllUsers,
    findUserById,
    updateUser,
    removeUser
};