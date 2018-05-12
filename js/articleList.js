
app.controller('articleList', function ($scope, $http) {
    var promise = $http({
        method: 'GET',
        url: '/carrots-admin-ajax/a/article/search'
    });
    promise.then(function  successCallback(res) {
        $scope.data = res.data.data.articleList;
        console.log($scope.data)
    }, function (res) {
        console.log(res);
    })
});