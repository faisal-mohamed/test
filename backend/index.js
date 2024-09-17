const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

const corsOptions = {
    origin: 'http://localhost:5174', // Allow requests from this origin
    methods: 'GET,POST', // Allowed methods
    allowedHeaders: 'Content-Type,Authorization' // Allowed headers
  };
  
  // Use CORS middleware
  app.use(cors(corsOptions));
  

app.use(express.json()); // This parses JSON bodies


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/getData', (req, res) => {
    res.json({
        status: 'success',
        data: 'Queried the Data'
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});