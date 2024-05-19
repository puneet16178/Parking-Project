const Reg=require('../models/reg')
const bcrypt=require('bcrypt')


exports.loginpage=(req,res)=>{
    res.render("login.ejs",{message:''})
}
exports.logincheck=async(req,res)=>{
    const {us,pass}=req.body
    const record=await Reg.findOne({username:us})
    if(record!==null){
        
        const passwordCompare=await bcrypt.compare(pass,record.password)
        if(passwordCompare){
            //console.log(passwordCompare)
            res.redirect('/parking')
        }else{
            res.render('login.ejs',{message:'Wrong Credentials'})
        }
        
    }else{
        res.render('login.ejs',{message:'Wrong Credentials'})
    }
}


exports.regform=(req,res)=>{
    res.render('reg.ejs',{message:''})
}
exports.register=async(req,res)=>{
    const {us,pass}=req.body
    let convertedpass=await bcrypt.hash(pass,10)
    //console.log(convertedpass)
    const record=new Reg({username:us,password:convertedpass})
    record.save()
    //console.log(record)
    res.render('reg.ejs',{message:'Successfully user has been created'})
}