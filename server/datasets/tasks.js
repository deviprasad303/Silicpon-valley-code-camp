/**
 * Created by devi on 8/15/2017.
 */
var mongoose=require('mongoose');
module.exports=mongoose.model('task',{
    taskId:String,
    taskname:String,
    userId:String,
    content: String,
    userImage: String,
    date:{type:Date,default:Date.now},
    bio:String,
    status:{type:Boolean,default:1},
    frequency:String,
    Days_Pending:Number,
    admin:String,
    Groupid:{type:String,default:'0'},
    Comment:[{userId:String,taskname:String,comment:String}],
});