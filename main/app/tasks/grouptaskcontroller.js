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




            $http.get('api/group/GetAllGroupsbyid',userId).
            then(function (response) {
                $scope.mygroupsbyid = response.data;})



            $http.get('api/group/GetAllGroups').
            then(function (response) {
                $scope.mygroups = response.data;})


            //console.log($scope.user.task.length);
            $http.post('api/task/add',request).success(function(response){

            }).error(function(error){
                console.log(error);
            })
        }

    }])
}());