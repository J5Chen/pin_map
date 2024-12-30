const db = require("../db/queries")

async function postUser(req, res) {
    const result = await db.createUser(req.params.name)
    res.send(result)
}

async function getAllUsers(req, res) {
    const users = await db.findAllUsers();
    res.send(users);
}

async function getUserById(req, res) {
    const userId = req.params.userId;
    const user = await db.findUserById(userId);
    res.send(user);
}

async function patchUser (req, res) {
    const userId = req.params.userId;
    const newName = req.body.name;
    const results = await db.updateUser(newName, userId);
    res.send(results);
}

async function deleteUserById(req, res) {
    const userId = req.params.userId;
    const result = await db.removeUser(userId);
    res.redirect("/users");
}

module.exports = {
    postUser,        
    getAllUsers,      
    getUserById,  
    patchUser,       
    deleteUserById
}
