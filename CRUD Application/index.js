import express from 'express';
//const express = require('express'); ES5
import bodyParser from 'body-parser';
// To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
import usersRoutes from './routes/users.js';
//importing the usersRoutes page for all the users



const app = express();
//calling express

const PORT = 5000;
//defining the port of the backend application

app.use(bodyParser.json());
//defining the type of data we are going to use in the application

app.use('/users', usersRoutes);

app.get('/',(req,res)=>res.send('Hello from Homepage !!'));
//We added a route to the homepage 

app.listen(PORT, ()=>console.log(`Server Running on port: http://localhost:${PORT}`));
//This is the basic server on localhost using node js, express js and nodemon


