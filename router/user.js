const express = require("express");
const router = express.Router();
const Users = require('../modals/User');

router.get('/getAll/:email', (req,res)=>{
    const email = req.params.email;
    const users = Users.find({email,age:{$gt:19}});
    users.then((allU)=>{
        console.log(allU)
        res.send({result: allU})
    }).catch((e)=>{
        res.send({message:e.message})
    })
})

 
 router.post("/Register", (req, res) => {
     try {
         res.sendFile(user +"./Component/Register")
         console.log("user name send successfully")
         
     } catch (error) {
         console.log(error.message)
     }
})

router.post("/addname", (req, res) => {
    var myData = new User(req.body);
    console.log(myData)
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.send("unable to save to database");
    });
   });




// router.get('/search/:name', (req,res)=>{
// const name = req.params.name;
//     const users = Users.find({name});
//     users.then((allU)=>{
//         console.log(allU)
//         res.send({result: allU})
//     }).catch((e)=>{
//         res.send({message:e.message})
//     })
// })

module.exports=router;