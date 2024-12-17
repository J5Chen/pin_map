const pool = require('./pool');

async function createPin(longitude, latitude, userId) {
    const result = await pool.query(
        `
    INSERT INTO pins (longitude, latitude, user_id)
    VALUES ($1, $2, $3);
    `,
        [longitude, latitude, userId]
    );
}

async function findAllPins() {
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


//todo
async function removePinById(userId) {
    row = findPinsByUser(userId);
    
    return results;
}

async function createUser(name) {
    const result = await pool.query(
    `
    INSERT INTO users (name)
    VALUES ($1);
    `,
        [name]
    );
}

//todo
async function deleteUser() {
    const { rows } = await pool.query("SELECT * FROM pins");
    return rows;
}

module.exports = {
    findAllPins,
    findPinsByUser,
    removePinById,
    createPin,
    createUser,
    deleteUser
};