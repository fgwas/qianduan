var app = angular.module('myApp', ['ui.router']);
app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state('back', {
            url: '/back',
            templateUrl: '#'
        })
        .state('list', {
            url: '/list',
            templateUrl: 'lianxi2.html'
        })
        .state('date', {
            url: 'date',
            templateUrl: 'laixi3.html'
        })
}]);