const express = require('express');
const fs = require('fs');
const nftsRoute = require('./routes/nftsRoute');
const usersRoute = require('./routes/usersRoute');


const app = express();
app.use(express.json());

app.use('/api/v1/nfts',nftsRoute);
app.use('/api/v1/users',usersRoute);


 module.exports = app;