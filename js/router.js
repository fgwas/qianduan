var app = angular.module('myApp', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $urlRouterProvider.when("", "/welcome");
        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'welcome.html'
            })
            .state('Article', {
                url: '/Article',
                templateUrl: 'ArticleList.html',
                controller: 'articleList'
            })
            .state('company', {
                url: '/company',
                templateUrl: 'companyList.html'
            })
    }]);











