const express = require('express')

require('dotenv').config();

require('./db/Connection')

const bodyParser = require('body-parser')

const app = express();

const testRoute = require('./Router/testRoutes');
const catagoryRouter = require('./Router/Category')
//get, put, post, patch, delete

// app.get('/', (request, response)=>{
//     response.send("This is a API server!");
// })


// middleware
app.use(bodyParser.json());

//Routes 
app.use('/api', testRoute);
app.use('/api', catagoryRouter);





port = process.env.PORT || 8000

// listen to the port

app.listen(port, ()=>{
    console.log(`Server Starded on Port ${port}`);
    
});

