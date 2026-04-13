import express,{type Request,type Response} from  'express';
import {} from './config/env.js';
const app=express();
const port=process.env.PORT;
app.get("/",(req,res)=>{
    res.send("hello world");
});
app.listen(port,()=>{
    console.log(`server running on ${port}`);
});