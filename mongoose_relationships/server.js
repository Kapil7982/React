const express = require('express');

const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/mydb");
}

const userSchema = new mongoose.Schema({

    first_name : {type:String, required:true},
    last_name : {type:String, required:true},
    email : {type:String, required:true},
    gender : {type:String, required:false},
    age : {type:Number, required:true},
}, {
    versionKey:false,
    timestamps:true
})

const User = mongoose.model("user", userSchema)


const postSchema = new mongoose.Schema({
    title:{type:String, required:true},
    body:{type:String, required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,
          ref:"user",
         required:true},
    tag_ids:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"tag",
            required:false
        }
    ]
}, {
    versionKey:false,
    timestamps:true
})

const Post = mongoose.model("post",postSchema)


const commentSchema = new mongoose.Schema({
    body:{type:String, required:true},
    post_id:{type:mongoose.Schema.Types.ObjectId,
          ref:"post",
         required:true}
}, {
    versionKey:false,
    timestamps:true
})


const Comment = mongoose.model("comment",commentSchema)

const tagSchema = new mongoose.Schema({
    name:{type:String, required:true}
}, {
    versionKey:false,
    timestamps:true
}) 

const Tag = mongoose.model("tag",tagSchema)


const app = express();
app.use(express.json())

// post 
app.post("/users",async (req, res) =>{

    try{
        const user = await User.create(req.body)

        res.status(201).json({user})
    }catch(err)
    {
         res.status(400).json({status:"error", message:err.message})
    }
    
})

//get all users

app.get("/users", async(req, res) =>{

    try {
        //const students = await User.find()
    const users = await User.find().lean().exec()

    //console.log(students);
    res.status(200).json({users});
    } catch (error) {
        res.status(400).json({status:"error", message:error.message})
    }

    
})

// get single user

app.get("/users/:id", async(req, res) =>{

    try {
        const user = await User.findById(req.params.id).lean().exec();

    res.status(200).json({user})
        
    } catch (error) {
        res.status(400).json({status:"error", message:error.message})
    }
    
})

// update a single user

app.patch("/users/:id",async(req, res) =>{


    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(201).json({user})
    } catch (error) {
        res.status(400).json({status:"error", message:error.message})
    }
    
})

// delete a single user

app.delete("/users/:id", async(req,res)=>{

    try {
        const user = await User.findById(req.params.id);

    res.status(200).json({user})
    } catch (error) {
        res.status(400).json({status:"error", message:error.message})
    }
    
})


// CURD for tag

app.post("/tags", async(req, res) =>{

    const tag = await Tag.create(req.body);

    return res.status(201).json({tag});
})

// get all tags

app.get("/tags", async(req, res) =>{

    const tags = await Tag.find().lean().exec();

    return res.status(200).json({tags});
})

// get single tag

app.get("/tags/:id", async(req, res) =>{

    const tag = await Tag.findById(req.params.id).lean().exec();

    return res.status(200).json({tag});
})

// update a tag

app.patch("/tags/:id", async(req, res)=>{

    const tag = await Tag.findByIdAndUpdate(req.params.id,req.body, {new:true});

    return res.status(200).json({tag});
})

// delete a tag

app.delete("/tags/:id", async(req, res)=>{
    const tag = await Tag.findByIdAndDelete(req.params.id);

    return res.status(200).json({tag});
})

// CRUD for post

// create a post
app.post("/posts", async(req, res) =>{

    const post = await Post.create(req.body);

    return res.status(201).json({post});
})

// get all post
app.get("/posts", async(req, res) =>{
    const posts = await Post.find().populate("user_id").populate("tag_ids").lean().exec();

    return res.status(200).json({posts});
})

// get single post
app.get("/posts/:id", async(req, res)=>{
    const post = await Post.findById(req.params.id).populate("user_id").populate("tag_ids").lean(). exec();

    return res.status(200).json({post});
})

// update a post

app.patch("/posts/:id", async(req, res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true});

    return res.status(200).json({post});
})

// delete a post 

app.delete("/posts/:id", async(req, res) =>{

    const post = await Post.findByIdAndDelete(req.params.id);

    return res.status(200).json({post});
})

// get all comments for a post

app.get("/posts/:id/comments", async(req, res)=>{
    const comment = await Comment.find({post_id: req.params.id}).lean().exec();

    const post = await Post.findById(req.params.id).populate("tag_ids").lean(). exec();

    return res.status(200).json({comment,post});
})

// CURD for comments

app.post("/comments", async(req,res) =>{

    const comment = await Comment.create(req.body);

    return res.status(201).json({comment});

})

// get all comments

app.get("/comments", async(req, res) =>{
    const comment = await Comment.find().populate("post_id").lean().exec();

    return res.status(200).json({comment});
})

// get a single comment

app.get("/comments/:id", async(req, res)=>{
    const comment = await Comment.findById(req.params.id).populate("post_id").lean(). exec();

    return res.status(200).json({comment});
})

// update a comment

app.patch("/comments/:id", async(req, res)=>{
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new:true});

    return res.status(200).json({comment});
})

// delete a commnet 

app.delete("/comments/:id", async(req, res) =>{

    const comment = await Comment.findByIdAndDelete(req.params.id);

    return res.status(200).json({comment});
})

app.listen(8888, async function () {
    await connect();
    console.log("Listening on port 8888");
})