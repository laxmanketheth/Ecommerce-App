const router = require("express").Router(); 
const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

//Register API//
router.post('/register',async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10)
    });
    try{
    const savedUser = await newUser.save()
         res.status(201).json(savedUser)
    }catch(err){
         res.status(500).json(err)
    }
})
 
//LOGIN API

router.post('/login',async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username })
        // console.log(user);
        !user && res.status(401).json("wrong credentials")
        // console.log(user);

        // const password = req.body.password == user.password
        const ispasswordValid = await bcrypt.compare(req.body.password, user.password)
        !ispasswordValid && res.status(400).json("wrong password")

        // console.log(user.password);

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
        process.env.JWT_SECKEY,
        {expiresIn: "3d"}
        )

        const {password, ...others} = user._doc; //destructuring the user object and returning everything except password
                                                //in line above we are using "user._doc" because mongodb stores our document inside "_doc"
       
        //    console.log(password)  
        // console.log(others);
          res.status(200).json({...others, accessToken})
        // console.log(user);
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router




