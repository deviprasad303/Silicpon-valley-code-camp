/**
 * Created by devi on 8/15/2017.
 */

(function(){
    angular.module('mean-demo')
        .controller('GroupController',['$scope','$state','$http',function($scope,$state,$http){

            $scope.fnames = [];

            $scope.fnamequery = [];
            $scope.items = [{}];
            $scope.fnamePicked=[];

            console.log($scope.item);
            console.log($scope.fnamequery[0]);
            $http.get('api/group/GetAllNames').
            then(function (response) {
                $scope.fnames = response.data;
                $scope.fnames.forEach(function(name){
                    console.log(JSON.parse(localStorage['User-Data']).email);
                   if(name.email===JSON.parse(localStorage['User-Data']).email)
                   {
                       var index = $scope.fnames.indexOf(name);
                       console.log(name);
                       if (index > -1) {
                           $scope.fnames.splice(index, 1);
                       }
                   }
                });
                console.log($scope.fnames);
            }, function errorCallback(error) {
                //print error to console.
                console.log(error);
            });






            $scope.add = function(){
                $scope.items.push({});
                console.log($scope.items);
            }
            $scope.GetSuggestion = function (strname,index) {
                $scope.item = strname;
                $scope.items[index] = strname;
                    $scope.fnamePicked[index] = true;




                console.log($scope.fnamePicked);
                console.log($scope.item);
                console.log($scope.items);
            }
            $scope.AddallMembers=function()
            {
                console.log(JSON.parse(localStorage['User-Data'])._id);
                //$scope.items.push(localStorage['User-Data']._id)
                var request={
                    Groupname:$scope.newGroup.Groupname,
                    Members:$scope.items,
                    self:JSON.parse(localStorage['User-Data']).email
                }
               // console.log(request);
                $http.post('api/group/members',request).success(function(response){


                }).error(function(error){
                    console.log(error);
                })
            }
        }]);
}());
















