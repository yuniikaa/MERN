const router = require('express').Router();

const User = require('../Models/userModel');
const jwt = require('jsonwebtoken')

const bcrypt = require("bcrypt");

router.get('/hello', (req, res) => {

    res.send('Welcome to API');
});

//create a route for the user registration
router.post('/register', async (req, res) => {
    console.log(req.body);

    //destrcturing
    const { fname, lname, email, password } = req.body;

    //Validation
    if (!fname || !lname || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    try {
        //check for existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        //hash the password
        const salt = await bcrypt.genSaltSync(10);
        const passwordHash = await bcrypt.hashSync(password, salt);

        //create new user
        const newUser = new User({
            fname: fname,
            lname: lname,
            email: email,
            password: passwordHash,
        });

        newUser.save();
        res.json("User registration successful!")

    } catch (error) {
        res.status(500).json("User registration failed"); ({ email });
    }

});

//create a route for the user registration
router.post('/login', async (req, res) => {
    console.log(req.body);

    //destrcturing
    const { email, password } = req.body;

    //Validation
    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    try {
        const user = await User.findOne({ email });
        console.log(user)
        //check 
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }
        //check if password is correct
        const isCorrectPassword = await bcrypt.compare(password, user.password)
        if (!isCorrectPassword) {
            await res.status(400).json({ msg: "Invalid credentials" });
        }

        //creating token and signing it with jwt
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
        })

        //Send user data
        res.json({
            token,
            user,
            msg: "User logged in successfully"
        });

    } catch (error) {
        console.log(error);
    }

});

module.exports = router;
























