
const userModel = require('../model/model');

exports.getList = (req , res)=>{
    console.log(userModel);
    res.json({
        message: 'this is get list function',
        model:userModel.sample()
    });
}
exports.addUsers = (req , res)=>{
    
    res.json({
        message: 'this is ADD users'
    });
}


exports.getRoles = (req , res)=>{
    
    res.json({
        message: 'this is get roles function'
    });
}