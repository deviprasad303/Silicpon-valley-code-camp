/**
 * Created by devi on 8/15/2017.
 */

var User=require('../datasets/users');
var Group=require('../datasets/group');

module.exports.addtogroup=function(req,res) {
    // var user = mongoose.model('User');
    // console.log('hi');
    var groupmembers = req.body.Members;
    console.log(req.body.self);
    groupmembers.push(req.body.self);
    var data;
    var glen=groupmembers.length;
    // console.log(req.body.Members[0]);
    var newgroup = new Group();
    newgroup.Groupname = req.body.Groupname;
    newgroup.save();



        User.find({email: groupmembers}).exec(function (err, userData) {
            //console.log(groupmembers[members]);
            if (err)
                return console.log(err);
            //newgroup.Members.push(userId);
            //newgroup.save();
            console.log(req.body.self);
        //   console.log(req.body.self);
            newgroup.save();
          for( data =0;data<userData.length;++data) {
              console.log(data);
              if(data<userData.length) {
                  console.log(userData[data]._id);
                  newgroup.Members.push(userData[data]._id);
                  userData[data].groups.push(newgroup._id);
                  userData[data].save();
                  console.log(newgroup._id);


              }
          }
                newgroup.save();
              //  console.log(name._id);



        //    newgroup.save();
            console.log(newgroup._id);
            // userData.groups.push(newgroup._id);
            //userData.save();
        });





}