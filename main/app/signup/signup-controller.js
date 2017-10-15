(function(){
            angular.module('mean-demo').
                controller('SignupController',['$scope','$state','$http',function($scope,$state,$http){
                    $scope.createUser=function () {
                        $http.post('api/user/signup',$scope.newUser).success(function(response){

                        }).error(function(error){
console.log(error);
                        })
                    }
            }])
}());