/**
 * Created by devi on 8/15/2017.
 */
(function(){

    angular.module('mean-demo').
    controller('TaskController',['$scope','$state','$http',function($scope,$state,$http){
     var userId=JSON.parse(localStorage['User-Data'])._id;
     //$scope.task.userId=userId;
        $scope.addmytask=function()
        {
            var request={
                taskname:$scope.task.taskname,
                userId:userId,
                content:$scope.task.content,
                frequency:$scope.task.frequency
            }



            //console.log($scope.user.task.length);
            $http.post('api/task/add',request).success(function(response){

            }).error(function(error){
                console.log(error);
            })
        }

    }])
}());
