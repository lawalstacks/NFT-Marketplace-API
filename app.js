const express = require('express');

const port = 3000;

const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
  res.status(200).json({message:"welcome to global api"});
});

app.listen(port, ()=>{
  console.log(`port running on ${port}`);
});
