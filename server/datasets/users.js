/**
 * Created by devi on 6/21/2017.
 */
var mongoose=require('mongoose');
module.exports=mongoose.model('User',{
    email:String,
    password:String,
    image: String,
    username:String,
    userImage:String,
    bio:String,
    following:[{userId:String,username:String}],
    followers:[{userId:String,username:String}],
    tasks:[{taskname:String, Days_Pending:Number}],
    Comment:[{userId:String,taskname:String,comment:String}],
    groups:[{groupId:String}],
    Notifications:String
});