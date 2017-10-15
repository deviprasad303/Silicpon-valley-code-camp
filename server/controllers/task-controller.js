/**
 * Created by devi on 8/15/2017.
 */
var Task=require('../datasets/tasks');

var User=require('../datasets/users');
module.exports.addtask=function(req,res){
    task=new Task(req.body);
    //task.userId=
    task.save();

}

module.exports.getgroups=function(req,res){
    var userId=req.body.userId;
    //task.userId=
    User.findById(userId,function(err,userData) {
        if (err) {
            res.error(err);

        } else {
            res.json(UsersData.groups);
        }

})
}
module.exports.removetask=function(req,res){
    var userId=req.body.userId;
    var taskname=req.body.taskname;


        User.findById(userId,function(err,userData){
            var user=userData;
            user.tasks.pop({taskname:taskname});
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
            });
    })
}
