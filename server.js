const express = require("express");
const app = express();
const path=require('path');

//setup static folder
// app.use(express.static(path.join(__dirname,'public')));
let post=[
    {id:1,title:'post1'},
    {id:2,title:'post2'},
    {id:13,title:'post3'},
]

app.get('/api/post',(req,res)=>{
    res.json(post)
})




//req and res are objects
//res has a bunch of methods

app.listen(8000, () => console.log(`Server is running on 8000`));
