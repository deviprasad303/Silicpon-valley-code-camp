/**
 * Created by devi on 8/9/2017.
 */
(function(){
    angular.module('mean-demo')
        .controller('FollowController',['$scope','$http',function($scope,$http){
$scope.user=JSON.parse(localStorage['User-Data']);
            console.log($scope.user);
            $http.get('api/user/get').then(function(response){
    $scope.users= response.data;
    console.log($scope.users);
    }
)
            $scope.follow=function(userId,meanId){
                var data={
                    userId:userId,
                    meanId:meanId
                };
                $http.post('api/users/follow',data).then(function(){
                    console.log("following",meanId);
                })
            }

            $scope.unfollow=function(userId,meanId){
                var data={
                    userId:userId,
                    meanId:meanId
                };
                $http.post('api/users/unfollow',data).then(function(){
                    console.log("stopped following",meanId);
                })
            }
            $scope.checkisFollowing=function(meanId)
            {
                console.log($scope.user.following.length);
                for(var i=0,len=$scope.user.following.length;i<len;i++)
                {
                    if($scope.user.following[i].userId==meanId){
                        console.log($scope.user.following[i].userId);
                        return true;
                    }
                }
            return false;
            }        }]);
}());