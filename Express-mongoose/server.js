const express = require('express');

const mongoose = require('mongoose');



const connect = () =>{
    return mongoose.connect(" mongodb://127.0.0.1:27017/mydb", {
        useCreateIndex: true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}

const app = express();
app.use(express.json())

const userSchema = new mongoose.Schema({
    first_name:{type:String, require:true},
    last_name:{type:String, require:true},
    gender:{type:String, require:false, default:"Male"},
    email:{type:String, require:true},
    age:{type:Number, require:true}
}, {
    versionKey:false,
    timestamps:true
})

const User = mongoose.model("student", userSchema)

app.get("/student", async(req, res) =>{

    //const students = await User.find()
    const students = await User.find({age:{$gt:15}}).lean().exec()

    console.log(students);
    res.send(students);
})

app.post("/student",async (req, res) =>{

    try{
        const student = await User.create(req.body)

        res.status(201).json({student})
    }catch(err)
    {
         res.status(400).json({status:"error", message:err.message})
    }
    
})

app.patch("/student/:id",async(req, res) =>{
    const student = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(201).json({student})
})

app.get("/student/:id", async(req, res) =>{
    const student = await User.findById(req.params.id).lean().exec();

    res.status(200).json({student})
})

app.delete("/student/:id", async(req,res)=>{
    const student = await User.findById(req.params.id);

    res.status(200).json({student})
})


app.listen(3333, async function(){
    await connect();
    console.log('lisenting on port 3333');
});

