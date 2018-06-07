// 上传controller
angular.module('myApp')
    .controller('addimg', function ($scope, FileUploader, $http, $state, $stateParams) {
        var uploader = $scope.uploader = new FileUploader({
            method: 'POST',
            url: '/carrots-admin-ajax/a/u/img/task'
        });


        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            console.log(response);
            console.info('onSuccessItem', response.data.url);
            $scope.src = response.data.url;
            $scope.imgshow = $scope.src;
        };


        // FILTERS

        uploader.filters.push({
            name: 'imageFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });


        $scope.uploadAll = function () {
            //http请求上线
            $http({
                method: 'POST',
                url: '/carrots-admin-ajax/a/u/article',
                params: {
                    type: $scope.type,
                    title: $scope.usertittle,
                    url: $scope.userurl,
                    img: $scope.imgshow,
                    status: 2
                }
            }).then(function (res) {
                $scope.data = res.data;
                $state.go("base.Article")
            })
        };


        //http请求草稿
        $scope.cancelAll = function () {
            $http({
                method: 'POST',
                url: '/carrots-admin-ajax/a/u/article',
                params: {
                    type: $scope.type,
                    title: $scope.usertittle,
                    url: $scope.userurl,
                    img: $scope.imgshow,
                    status: 1
                }
            }).then(function (res) {
                $scope.data = res.data;
                $state.go("base.Article")

            })
        };


        //富文本编辑
        var E = window.wangEditor;
        var editor = new E('#div1');
        // var editor = new E( document.getElementById('editor') )
        editor.create();


        // 编辑
        $scope.editor = function () {
            var id = $stateParams.id;
            console.log($stateParams.id);
            $http({
                method: 'get',
                url: '/carrots-admin-ajax/a/article/' + id
            }).then(function (res) {
                $scope.usertittle = res.data.data.article.title;
                $scope.usertype = res.data.data.article.type;
                $scope.userurl = res.data.data.article.url;
                $scope.imgshow = res.data.data.article.img;
                $scope.content = res.data.data.article.content;
                console.log($scope.usertype);
                $scope.type = $scope.usertype.toString();
                $("#editortxt").replaceWith($scope.content);
                console.log($scope.type);
                console.log($scope.usertittle);
                console.log($scope.userurl);
                console.log($scope.imgshow);
                console.log($scope.content);


                $scope.data = res.data;
                console.log($scope.data)
            })
        };

        // 编辑进来显示
        $scope.editor();


    });

