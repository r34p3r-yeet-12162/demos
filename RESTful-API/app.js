// so that we have access to the constants in the .env file
require('dotenv').config();

//We are setting these variables using .env
const PORT = process.env.PORT || 8081;
const DB_URL = process.env.DB_URL;
const HOST = process.env.HOST;

let express = require('express')
let app = express();

// We need to tell the app that we will be using JSON
// ... middleware coming soon
app.use(express.json()) 

// Initialising our ORM
let mongoose = require('mongoose')

//It is possible that an 'unpredictable' something could go wrong
// therefore we use try catch 
try {    
    mongoose.connect(DB_URL, {useNewUrlParser: true}); 
} catch (error) {
    console.log(error);    
} 

//Initialising the connection, and persisting a connection string
const selectedDb = mongoose.connection;

selectedDb.on('error', (error)=>{
    console.log('There was an error: ', error);
})
selectedDb.on('open', ()=>{
    console.log('Connected');
})

app.listen(PORT,HOST, ()=>{
    console.log('Listening on: ', PORT);
})

const usersRouter = require('./routes/index');
// endpoint '/users/view
// endpoint '/users/add
// endpoint '/users/delete
// endpoint '/users/update
app.use('/users', usersRouter) // Middleware: For handling any routes that start with /users/..

// endpoint '/books/view
// endpoint '/books/add
// endpoint '/books/delete
// endpoint '/books/update
//app.use('/books', usersRouter)

// endpoint '/teachers/view
// endpoint '/teachers/add
// endpoint '/teachers/delete
// endpoint '/teachers/update


/* Recreate this example */
