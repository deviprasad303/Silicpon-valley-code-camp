/**
 * Created by devi on 7/28/2017.
 */

var User=require('../datasets/users');
var fs=require('fs-extra');
var path=require('path');

module.exports.updatePhoto=function(req,res){
    var file=req.files.file;
    var userId=req.body.userId;
console.log("User  "+ userId +"is submitting",file);
var uploadDate1=new Date();
    var uploadDate = uploadDate1.getFullYear() + "-" + (uploadDate1.getMonth() + 1) + "-" + uploadDate1.getDate() + "-" + uploadDate1.getHours() + "H-" +  uploadDate1.getMinutes() + "M";


var tempPath=file.path;

var targetPath=path.join(__dirname,"../../uploads/"+userId+uploadDate+file.name);
var savepath="/uploads/"+userId+uploadDate+file.name;
fs.rename(tempPath,targetPath,function (err) {
    if(err)
    {
        console.log(err);

    }
    else
    {
        User.findById(userId,function (err,userData) {
            var user =userData;
            user.image=savepath;
            user.save(function (err){
if(err)
{
    console.log("failed");
    res.json({status:500});
}
else
{
    console.log("successful");
    res.json({status:200});
}
            }
                
            );
        })
    }
})
}

module.exports.updateUsername=function(req,res){
    var username=req.body.username;
    var userId=req.body.userId;
    User.findById(userId,function(err,userData){
        var user=userData;
        user.username=username;
        user.save(function(err){
            if(err){
                console.log("fail");
                res.json({status:500});
            }
            else
            {
                console.log('success');
                res.json({status:200});
            }
        })
    });
};

module.exports.updateBio=function(req,res){
    var bio=req.body.bio;
    var userId=req.body.userId;
    User.findById(userId,function(err,userData){
        var user=userData;
        user.bio=bio;
        user.save(function(err){
            if(err){
                console.log("fail");
                res.json({status:500});
            }
            else
            {
                console.log('success');
                res.json({status:200});
            }
        })
    });
};