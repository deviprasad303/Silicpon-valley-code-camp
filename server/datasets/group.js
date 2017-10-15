/**
 * Created by devi on 8/21/2017.
 */

var mongoose=require('mongoose');
module.exports=mongoose.model('group',{
    Groupname:String,
    Members:[{userId:String}],
    Notifications: [{notify:String}],
    adminId: String,
});