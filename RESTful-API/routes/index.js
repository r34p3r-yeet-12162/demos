const express = require("express");
const usersRouter = express.Router();

//The model we are importing will come with some methods
// for example . you will notice that we will...
// .save(), .find(), findAndDelete()

//REST defines four HTTP verbs
// these verbs are part of your router
// Use the appropriate verb for the correct action!
const User = require("../models/user"); // We will use instances of User to interact with MongoDB

// If we are here, it means we typed 'http://localhost:6081/users'
// Note that the function is async because we want to await the operation of saving
usersRouter.post("/add", async (req, res) => {
  // We will create an instance of User

  const user_to_save = new User({
    // here we are reading the request body to retreive the  name and surname
    // This is read from the request
    name: req.body.name,
    surname: req.body.surname,
  });
  // ...then we will attempt to save. But we needed to catch the error
  try {
    const newUser = await user_to_save.save(); // This will probably take time
    // You will need to set a status code for the response as well as the response json
    // The following line sets the response status to 201, and sends back some message
    res.status(201).json(newUser);
  } catch (error) {
    // if something goes wrong on the server..
    res.status(500).json({ message: error.message });
  }
});

// If we are here, it means we typed 'http://localhost:6081/users/view'
usersRouter.get("/view", async (req, res) => {
  try {
    const foundUsers = await User.find();
    res.json(foundUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// The following will use a parameter in the URL
// parameters allow is to create dynamic URLS
// Think of the param as a variable
// To add the parameter, use :<param_name>
// In this example we will add an ID as the parameter
usersRouter.get("/view/:id", async (req, res) => {
  let userID = req.params.id; // Now we are accessing the ID from the query string
  // for example if the URL were ' ......../users/view/123
  // then the value of userID will be 123
  // In other words we want to kind cof simulate the WHERE clause of SQL statement when selecting
  try {
    const foundUsers = await User.findById(userID);
    res.json(foundUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = usersRouter;

/* 

HOMEWORK:

Complete the application so that you are able to update 
and delete records from MongoDB, in the meantime see if you can successfully create a record in 
your mongoDB collection

We continue at 11:15AM
*/
