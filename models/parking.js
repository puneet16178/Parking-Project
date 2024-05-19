const mongoose=require('mongoose')


const parkingSchema=mongoose.Schema({
    vno:String,
    vtype:String,
    vin:{type:Date,default:Date.now},
    vout:Date,
    status:{type:String,default:'IN'},
    amount:{type:Number,default:0}
})


module.exports=mongoose.model('parking',parkingSchema)