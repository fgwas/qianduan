var app = angular.module('myApp', ['ui.router']);
app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state('back', {
            url: '/back',
            templateUrl: '#'
        })
        .state('Article', {
            url: '/Article',
            templateUrl: 'task6-2.html'
        })
        .state('company', {
            url: 'company',
            templateUrl: 'task6-3.html'
        })
}]);



