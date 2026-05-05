// SERVER SETUP
const express=require('express');
const app=express();
app.use(express.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    if(req.method=='OPTIONS'){
    return res.sendStatus(200);
}next();
});
app.listen(3000,()=>{
    console.log('server is running , buddy , on http://localhost:3000, thanks for joining')
})
//PERSONEL WORK HERE
let l=1;
app.get('/liqo',(req,res)=>{
    res.json({l});
})
app.post('/liqo',(req,res)=>{
    l++;
    res.json({l});
})

// like and load add like 
