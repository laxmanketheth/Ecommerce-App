const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

//Register API//
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        password: await bcrypt.hash(req.body.password, 10)
    });
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

//Login API//
router.post('/login',async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username })
        // console.log(user);
         !user && res.status(400).json("wrong credentials")
        // console.log(user);

      
        const ispasswordValid = await bcrypt.compare(req.body.password, user.password)     
        !ispasswordValid && res.status(400).json("wrong password")

        const accessToken = jwt.sign({ //sign() is a function provided by the JWT library to create a new JWT. 
                                         //The sign() function  takes two arguments: the payload and the secret key.
            id: user._id,
            isAdmin: user.isAdmin //this is payload
        },
        process.env.JWT_SECKEY,  //this is secret key
        {expiresIn: "3d"}
        )
        // console.log(accessToken);
        const {password, ...others} = user._doc; //destructuring the user object and returning everything except password
                                                //in line above we are using "user._doc" because mongodb stores our document inside "_doc"
                                                
          res.status(200).json({...others, accessToken})
        //   console.log({...others, accessToken});
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;




