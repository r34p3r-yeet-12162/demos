// Allows us to use any config parameters that have been in the .env file
require('dotenv').config();
const express = require('express');
const app = express();

// We will create variables based on the config asigned to the global process via env
const port = process.env.PORT || 3090;
const dbName = process.env.DATABASE_CONNECTION_URL;

//We will use mongoose ORM. The ORM implies that devs can be database-agnostic
const mongoose = require('mongoose'); // This is the ORM
mongoose.connect(dbName, { useNewUrlParser: true, useUnifiedTopology: true }); // Note the options
const selectedDatabase = mongoose.connection; // It sets selectedDatabase as the default connection for the app 
// We can use events to decide on actions, for example we can check whether the connection generated an error or otherwise
selectedDatabase.on('error', () => {
    console.log('Error connecting to DB');
});
selectedDatabase.once('open', () => {
    console.log('Success');
});


// We want to add middleware that states that we will be using JSON as a data interchange format for the entire application
app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`App listening on port ${port} !`);
});


/* '/users'
    '/users/admin/'
    '/users/admin/0001'
    '/users/admin/0001/logs'
    '/users/admin/0001/sessions'
    '/users/learner'
    '/users/facilitator'
    '/users/support'

    ./assessment/test'
    ./assessment/project'
    ./assessment/assginment'
    ./assessment/assginment'

    'books/..
*/