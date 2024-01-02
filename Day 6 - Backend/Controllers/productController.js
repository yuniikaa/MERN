const productModel = require('../Models/productModel');
const cloudinary = require("cloudinary");
const router = require('express').Router();

//create a add product route
router.post("/add", async (req, res)=>{
    console.log(req.body);
    //res.json("Add Product");

    //destructing
    const {productName, productPrice, productCategory, productDescription} = req.body;
    const {productImage } = req.files;

    //validation
    if(!productName || !productPrice || !productCategory || !productDescription || !productImage){
        return res.status(422).json({
            msg: "Please enter all fields"
        });
    }
     //upload image to cloudinary
     const uploadedImage = await cloudinary.v2.uploader.upload(
        productImage.path,
        {
            folder: "onlinebazaar",
            crop: "scale"
        },
    );
    try{    
        //create a new product
        const newProduct = new productModel({
            name: productName,
            price: productPrice,
            category: productCategory,
            description: productDescription,
            image: uploadedImage.secure_url
        });

        //save the product
        await newProduct.save();
        res.status(201).json("Product added successfully");

    }
    catch(error){
        res.status(201).json(error);
    }
});
module.exports= router;