// // session 刷新还存在 退出浏览器不存在
// myApp.factory("session", [
//     "$window",
//     function($window) {
//         return {
//             //存储单个属性
//             set: function(key, value) {
//                 $window.sessionStorage[key] = value;
//             }, //读取单个属性
//             get: function(key, defaultValue) {
//                 return $window.sessionStorage[key] || defaultValue;
//             }, //存储对象，以JSON格式存储
//             setObject: function(key, value) {
//                 $window.sessionStorage[key] = JSON.stringify(value); //将对象以字符串保存
//             }, //读取对象
//             getObject: function(key) {
//                 return JSON.parse($window.sessionStorage[key] || "{}"); //获取字符串并解析成对象
//             }
//         };
//     }
// ]);


app.factory("locals", [
    "$window",
    function ($window) {
        return {
            //存储单个属性
            set: function (key, value) {
                $window.localStorage[key] = value;
            }, //读取单个属性
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            }, //存储对象，以JSON格式存储
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value); //将对象以字符串保存
            }, //读取对象
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || "{}"); //获取字符串并解析成对象
            }
        };
    }
]);


angular.module('myApp')
    .controller('listCtrl', function ($scope, $state,locals) {
        $scope.atflick=locals.get("light");
        $scope.atlight=locals.get("light1");
        $scope.articleList = [
            {
                'x': '信息管理',
                'y': [
                    {
                        name: '公司列表'

                    },
                    {
                        name: '职位列表'

                    }
                ]
            },
            {
                'x': 'Article管理',
                'y': [
                    {
                        name: 'Article列表',
                        URL: 'base.Article'
                    },
                    {
                        name: '文章管理'

                    }
                ]
            },
            {
                'x': '用户管理',
                'y': [
                    {
                        name: '用户列表'
                    }
                ]
            }];
        console.log($scope.articleList);


        $scope.current = 3;
        $scope.showface = function (i) {
            console.log(i);
            $scope.current = i;
            $scope.light=i;
            locals.set("light", $scope.light);
        };


        $scope.childList = function (e) {
            $scope.e = e;
            $scope.light1=e;
            locals.set("light1", $scope.light1);
        }
    });








