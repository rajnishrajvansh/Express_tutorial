import express from 'express';
const router=express.Router();

let post = [
    { id: 1, title: "post1" },
    { id: 2, title: "post2" },
    { id: 13, title: "post3" },
  ];

router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
      return res.status(200).json(post.slice(0, limit));
    }
    res.status(200).json(post);
  });
  
  //Get a single post
  router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const p = post.find((p) => p.id === id);
    if (!p) {
      return res.status(404).json({ msg: `Not Found` });
    }
    res.status(200).json(p);
  });
  
  //req and res are objects

//create new posts
router.post('/',(req,res)=>{
 const newPost={
  id:post.length+1,
  title:req.body.title
 }
 if(!newPost.title){
  return res.status(400).json({msg:'Please include a title'})
 }
 post.push(newPost);
  res.status(201).json(post);
});
router.put(':/id',(req,res)=>{
  const id=parseInt(req.params.id);
  const p=post.find((p)=>p.id===id);
  if (!p) {
    return res.status(404).json({ msg: `Not Found` });
  }
  p.title=req.body.title;
  res.status(200).json(post);
})


export default router;
  //res has a bunch of methods