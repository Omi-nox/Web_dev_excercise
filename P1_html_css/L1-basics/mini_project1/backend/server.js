``// SERVER SETUP
const express=require('express');
const fs=require('fs');
const path = require('path');

const { json } = require('stream/consumers');
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

const DATA_FILE=path.join(__dirname,'likes.json');

function readData(){
    try{
        if(fs.existsSync(DATA_FILE)){
            const data=fs.readFileSync(DATA_FILE,'utf-8');
            const json=JSON.parse(data);
            return json.likes;
        }else{
            fs.writeFileSync(DATA_FILE,JSON.stringify({likes:0}));
            return 0;
        }
    }catch(err){
        console.error('Error reading data:',err);
        
    }
}

function writeData(likes){
    try{
        fs.writeFileSync(DATA_FILE,JSON.stringify({likes}));
    }catch(err){
        console.error('Error writing data:',err);
        return 0;
    }
}


app.listen(3000,()=>{
    console.log('server is running , buddy , on http://localhost:3000, thanks for joining')
})
//PERSONEL WORK HERE
let l=readData();
console.log('Intial likes:',l);
app.get('/liqo',(req,res)=>{
    let l=readData();
    res.json({l});
})
app.post('/liqo',(req,res)=>{
    let l=readData();
    l++;
    writeData(l);
    res.json({l});
})

// like and load add like 
