const ProfileModel = require("../models/profile-model");
const jwt = require('jsonwebtoken');

exports.CreateProfile=(req,res)=>{
    let reqBody = req.body;
    ProfileModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err});
        }
        else {
            res.status(200).json({status:"success", data:data});
        }
    });
}

exports.SelectProfile=(req,res)=>{
    let UserName = req.headers['username'];
    ProfileModel.find({UserName: UserName},(err,data)=>{
        if(err) {
            res.status(400).json({status:"fail", data:err});
        }
        else {
            res.status(200).json({status:"success", data: data});
        }
    });
}

exports.UpdateProfile=(req,res)=>{
    let UserName = req.headers['username'];
    ProfileModel.find({UserName: UserName},(err,data)=>{
        if(err) {
            res.status(400).json({status:"fail", data:err});
        }
        else {
            res.status(200).json({status:"success", data: data});
        }
    });
}