const express = require('express')
const path = require('path')
const app = express();
const mongooose = require('mongoose')
app.use(express.json())
const {Schema} = require('mongoose')
const hostname = '0.0.0.0'
const port = 3000
mongooose.connect('mongodb+srv://subham235:subham1234@cluster0.wuy84.mongodb.net/lgdata?retryWrites=true&w=majority',()=>{
    console.log("Connected to db")
})
const UserSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        key:{
            type:String,
            require:true,
        }

    }
)

const User = mongooose.model('user' , UserSchema);



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname , 'template/index.html'))
});

app.get('/lg' , (req,res)=>{
    res.send("jijjcjcjjd")
})

// app.post('/lg' , async(req,res)=>{
//     const data = req.body;
//     console.log(data)
//     try {
//         const us = new User({name:data.name , key:data.key})
//         await us.save();
//         res.send({status:true});
//     } catch (error) {
//         res.send({status:false , err:error});
//     }
// })

app.listen(port , hostname , (req,res)=>{
    console.log("started")
})