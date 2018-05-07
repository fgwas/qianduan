var app = angular.module('myApp', ['ngRoute']);
// app.controller('Homecontroller',
//     function ($scope) {
//         $scope.menuState = {'show': false};
//         $scope.listnews = function () {
//             $scope.menuState.show = !$scope.menuState.show;
//         };
//     }
// );

app.controller('Homecontroller',function($scope,$location){    //页面的控制函数；
    $scope.goToUrl=function(path) {        //此方法可以改变location地址；
        $location.path(path);
    }
});


app.config([function ($routeProvider) {
    $routeProvider
        .when('/huanying', {
            templateUrl: 'task6.html',
            controller: 'Homecontroller'
        })
        .when('/company', {
            templateUrl: 'task6-3.html',
            controller: 'newscontroller'

        })
}]);



