const express = require("express");
const router = express.Router();
const Users = require('../modals/User');
const Easy=require('../modals/Easy')
const Medium=require('../modals/Medium')
const Hard=require('../modals/Hard')

//add user api
router.post('/add', (req,res)=>{
    const user=new Users(req.body);
    console.log("user==========>",user)
 user.save().then(()=>{
     res.send({message:"User Enter Successfully"})
    }).catch(e=>{
        res.send({message:e.message})
    })
    

    
})

// router.post('/login', async (req, res) => {
//     //Check Email
//     const Users=req.body;
//     console.log("users,=======>",Users)
//     const user = await Users.find({name: req.body.name});

//     if(!user) {
//         res.send(500, {message: "User not found!"});
//         return;
//     }

//     //Compare Email
//     const passwordMatched = bcrypt.compareSync(req.body.password, user.password);

//     if(!passwordMatched) {
//         res.send(500, {message: "Incorrect Email/Password!"});
//         return;
//     }
// })


//getall user api

router.get('/getAll/:name', (req,res)=>{
    const name= req.params.name;
    const users = Users.find({name});
    users.then((allU)=>{
        console.log(allU)
        res.send({result: allU})
    }).catch((e)=>{
        res.send({message:e.message})
    })
})
 
 //Easy api
 router.post("/easy",(req,res)=>{
     const userscore=new Easy(req.body)
     console.log("easyscore========>",userscore)
     userscore.save().then(()=>{
         res.send({message:'Score add successfully'})
     }).catch((e)=>{
         res.send({message:e.message})
     })
 })

//Medium api
 router.post("/medium",(req,res)=>{
    const med=new Medium(req.body)
    console.log("easyscore========>",med)
    med.save().then(()=>{
        res.send({message:'Score add successfully'})
    }).catch((e)=>{
        res.send({message:e.message})
    })
})

//Hard api
router.post("/hard",(req,res)=>{
    const had=new Hard(req.body)
    console.log("easyscore========>",had)
    had.save().then(()=>{
        res.send({message:'Score add successfully'})
    }).catch((e)=>{
        res.send({message:e.message})
    })
})




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