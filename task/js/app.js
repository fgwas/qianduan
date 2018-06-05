var app = angular.module('myApp', [
    'ui.router',
    'oc.lazyLoad',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap'
]);


// app.factory('pathProject', function ($rootScope, $scope, $http) {
//     return {
//         getHttp: function (params) {
//             return $http.get('/carrots-admin-ajax/a/article/search', params)
//         },
//         uploadHttp: function (params) {
//             return $http.post('/carrots-admin-ajax/a/u/img/task', params)
//         },
//         addhttp: function (params) {
//             return $http.post('/carrots-admin-ajax/a/u/article', params)
//         },
//         statushttp: function (id, status) {
//             return $http.put('/carrots-admin-ajax/a/u/article/status?id=' + id + '&status=' + status)
//         },
//         deletearticle: function (id) {
//             return $http.delete('/carrots-admin-ajax/a/u/article/' + id)
//         },
//         getarticle: function (id) {
//             return $http.get('/carrots-admin-ajax/a/article/' + id)
//         }
//     }
// });
//

