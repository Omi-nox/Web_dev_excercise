    ``// SERVER SETUP
    const express=require('express');
    const fs=require('fs');
    const path = require('path');
    const mongoose=require('mongoose');
    const { type } = require('os');
    require('dotenv').config();


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

    const lkschema=new mongoose.Schema({
    num:{type:Number,default:0}
    })
    const like=mongoose.model('Mazy',lkschema);
    //connecting to database
    mongoose.connect(process.env.mongo_uri,)
        .then(async ()=>{
            console.log('Connected to MongoDB Database');
            let doc=await like.findOne();
            if(!doc){
                doc=new like({num:0});
                await doc.save();
                console.log('Initialized likes document in database');
            }else{
                console.log('Existing likes document found in database',doc.num);
            }
        }).catch((err)=>{
            console.error('Error connecting to MongoDB Database:',err);
        });



    app.listen(3000,()=>{
        console.log('server is running , buddy , on http://localhost:3000, thanks for joining')
    })
    //PERSONEL WORK HERE

    
    app.get('/liqo',async (req,res)=>{
        const doc=await like.findOne();
        if(!doc){
            return res.status(500).json({error:'Likes document not found in database'});
        }else{
            return res.json({l:doc.num});
        }
    
    })
    app.post('/liqo',async (req,res)=>{
    const doc=await like.findOne();
    if(doc){
        doc.num+=1;
        await doc.save();
        res.json({l:doc.num});
    } else {
        res.json({ l: 0 });
    }
        
    })

    // like and load add like 
