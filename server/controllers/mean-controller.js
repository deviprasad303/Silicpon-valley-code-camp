/**
 * Created by devi on 8/4/2017.
 */
var Mean=require('../datasets/mean');
module.exports.postMean=function(req,res){
        var  mean=new Mean(req.body);
        mean.save();

        Mean.find({})
            .sort({date: -1}).exec(function(err,allMean){

if(err){
    res.error(error);
}else
{
    res.json(allMean);
}
    })

}

module.exports.getMean=function (req,res) {
    Mean.find({})
        .sort({date:-1}).exec(function(err,allMean)
    {
        if(err){
            res.error(err);
        }else
        {
            res.json(allMean);
        }
    })


    
}