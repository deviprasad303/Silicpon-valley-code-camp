/**
 * Created by devi on 8/4/2017.
 */
var mongoose=require('mongoose');
module.exports=mongoose.model('mean',{

    user:String,
    userId:String,
    content: String,
    userImage: String,
    date:{type:Date,default:Date.now},
    bio:String
});