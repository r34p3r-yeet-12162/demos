const express = require('express');
const usersRouter = express.Router(); // Please note the case
const User = require('../models/user')


/* The slash represents / users because we are coming from app.js where /users was matched */
usersRouter.get('/', async (req, res) => {
    try {
        const users = await Users.find(); // The DB read shoud be asynchronous
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }
});

usersRouter.post('/create', async (req, res) => {
    // TP access the details that came with the request body ..
    const _name = req.body.name; // The name is the propety from the JSON object that was sent
    const _surname = req.body.surname;

    // Initialising the an object to save
    const user = new User({ name: _name, surname: _surname });
    // Try to save
    try {
        let newUser = await user.save(); // Using the user model to save the new data
        res.status(201).json(newUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
        
    }
});



module.exports = usersRouter;

