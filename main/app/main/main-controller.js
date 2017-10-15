/**
 * Created by devi on 8/4/2017.
 */

(function(){
    angular.module('mean-demo')
        .controller('MainController',['$scope','$http','$interval',
        function($scope,$http,$interval){
            $scope.users = [];
            $scope.mygroups = [];
            if(localStorage['User-Data']!== undefined){
                $scope.user=JSON.parse(localStorage['User-Data']);
                console.log($scope.user);
            }

            $http.get('api/group/GetAllNames').
            then(function (response) {
                $scope.users = response.data;});
            $http.get('api/group/GetAllTasks').
            then(function (response) {
                $scope.tasks = response.data;
                console.log($scope.tasks);
            });

            $http.get('api/group/GetAllGroups').
            then(function (response) {
                $scope.mygroups = response.data;});

            $scope.SendMean=function(event){
                if(event.which===13){
                    console.log($scope.user.image);
                    var request={
                        user:$scope.user.username||$scope.user.email,
                        userId:$scope.user._id,
                        userImage:$scope.user.image,
                        content:$scope.newMean
                    }
                    $http.post('api/mean/post',request).success(function(response){
                        console.log(response)
                        $scope.means=response;
                    }).error(function(error){
                        console.error(error);
                    })
                }
            };

            function getMean(initial) {
                $http.get('api/mean/get').success(function (response) {

if(initial){
    $scope.means=response;
}


else{
    if(response.length>$scope.means.length) {
        $scope.incomingmeans = response;
        console.log('it is working');
    }
}
                    }
                )
            };





            $interval(function(){
                //getUser(true);
                getMean(false);
                if($scope.incomingmeans){
                $scope.difference=$scope.incomingmeans.length-$scope.means.length;}
                console.log("this is working");
            },5000);
                $scope.setNewMean=function(){
                    $scope.means=angular.copy($scope.incomingmeans);
                    $scope.incomingmeans=undefined;
                }
            $scope.createNewGroup=function () {
                  //---$scope.
            }
            getMean(true);
        }]);
}());
