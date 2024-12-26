import express from 'express';
import post from './routes/post.js' 
import path from 'path'
const app = express();
const PORT = process.env.PORT || 8000;
//setup static folder
// app.use(express.static(path.join(__dirname,'public')));


//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Get all posts
//Routes
app.use('/api/post',post);

app.listen(8000, () => console.log(`Server is running on ${PORT}`));
