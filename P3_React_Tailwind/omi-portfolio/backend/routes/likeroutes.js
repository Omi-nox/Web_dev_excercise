const express = require('express');
const Like= require('../models/Like');
const router= express.Router();

router.get('/',async(req,res)=>{
    try{
        let likeDoc= await Like.findOne();
        if(!likeDoc){
            likeDoc= await Like.create({count: 0});
        }
        res.json({count: likeDoc.count});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});
router.post('/',async (req,res)=>{
    try{
        const likeDoc=await Like.findOneAndUpdate(
            {},
            {$inc:{count:1}},
            {new:true,upsert:true}
        );
        res.json({count: likeDoc.count});
    }catch(err){
        res.status(500).json({error: err.message});
    }
})
module.exports=router;