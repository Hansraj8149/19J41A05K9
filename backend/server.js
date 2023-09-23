const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors=require("cors");
const port = 3001;

const mongoURI = 'mongodb+srv://hansrajsaini8149:hansraj8149@cluster0.tinlwjt.mongodb.net/'; 
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.error('Error:', err);
  });

const trainRoutes = require('./routes/trainRoutes'); 
app.use('/api', trainRoutes); 

app.get('/', (req, res) => {
  res.send('Welcome to the Train API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
