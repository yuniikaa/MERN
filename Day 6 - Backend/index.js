const express = require('express');
const connectDB = require('./Database/database');
const cors=require('cors');
const cloudinary = require('cloudinary');
const multipart = require ('connect-multiparty');


//dotenv config
require("dotenv").config();
const app = express();

//express json
app.use(express.json());
app.use(multipart());

//cors configuration
const corsOptions = {
    origin: true,
    credentials: true,
    optionSuccessStatus:200
};

cloudinary.config = ({
    cloud_name: "dxllhvkut",
    api_key: "149673298541257",
    api_secret: "-PvrqnGWAR-KrgVXBupBuxSyonU"
})
app.use(cors(corsOptions));

//create a route
app.get('/', (req, res)=>
{
    res.send('Welcome to API');
});
//middleware for user controllers
app.use('/api/user', require('./Controllers/userControllers'));
//middleware for product controller
app.use('/api/product', require('./Controllers/productController'));

//connect to database
connectDB();

//listen to the server
app.listen(process.env.PORT, () => 
{
    console.log(`Server is running on port ${process.env.PORT}`);
});

