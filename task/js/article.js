var currentPage = 1;

angular.module('myApp')
    .controller('Article',function ($scope, $http, $state, $stateParams) {


        console.log($stateParams);
        $scope.params=$stateParams;
            // 分页插件
            //分页按钮点击
            $scope.pageGo = function () {
                $state.go("base.Article",{
                    params: $scope.params
                },{reload: true})
            };

            //发布时间转化时间
            var date1 = $scope.dt1;
            date1 = new Date(date1);
            createAt = date1.valueOf();

            //修改时间转化时间戳
            var date2 = $scope.dt2;
            date2 = new Date(date2);
            updateAt = date2.valueOf();


            //页面初始加载渲染


            $http({
                method: 'GET',
                url: '/carrots-admin-ajax/a/article/search?',
                params: $scope.params
            }).then(function (res) {
                $scope.data = res.data.data.articleList;
                //分页数据总数
                $scope.totalItems = res.data.data.total;
                //单页显示数量
                $scope.size = res.data.data.size;
                //分几页显示(取上)
                $scope.numPages = Math.ceil($scope.totalItems / $scope.size);
                console.log("总共是" + $scope.numPages);
                //当前显示页数
                $scope.currentPage = $stateParams.page;
                console.log($scope.currentPage);
            });


            //搜索
            $scope.search = function (params) {
                //http请求
                $http({
                    method: 'GET',
                    url: '/carrots-admin-ajax/a/article/search?',
                    params: {
                        //类型搜索
                        type: $scope.type,
                        //状态搜索
                        status: $scope.status,
                        //日历搜索
                        createAt: $scope.createAt,
                        updateAt: $scope.updateAt,
                        //页面显示条数
                        size: $scope.size,
                        //分页
                        page: $scope.currentPage
                    }
                }).then(function (res) {
                    $scope.data = res.data.data.articleList;
                    //分页数据总数
                    $scope.totalItems = res.data.data.total;
                    //单页显示数量
                    $scope.size = res.data.data.size;
                    //分几页显示(取上)
                    $scope.numPages = Math.ceil($scope.totalItems / $scope.size);
                    console.log("总共是" + $scope.numPages);
                    //当前显示页数
                    $scope.currentPage = $stateParams.page;
                    console.log($scope.currentPage);

                });
                $stateParams = {
                    type: $scope.type,
                    //状态搜索
                    status: $scope.status,
                    //日历搜索
                    createAt: createAt,
                    updateAt: updateAt,
                    //页面显示条数
                    size: $scope.size,
                    //分页
                    page: $scope.currentPage
                };
                console.log($stateParams);
                $state.go("base.Article",{
                    //类型搜索
                    type: $scope.type,
                    //状态搜索
                    status: $scope.status,
                    //日历搜索
                    createAt: $scope.createAt,
                    updateAt: $scope.updateAt,
                    //页面显示条数
                    size: $scope.size,
                    //分页
                    page: $scope.currentPage
                })
            };





            //清空
            $scope.clear = function () {
                $http({
                    method: 'GET',
                    url: '/carrots-admin-ajax/a/article/search'
                }).then(function (res) {
                    $scope.data = res.data.data.articleList;
                });
                //清空页面刷新
                $state.go('base.Article', {
                    type: null,
                    status: null,
                    createAt: null,
                    updateAt: null,
                    page: null,
                    startAt: null,
                    endAt: null,
                    size: null
                }, {reload: true})
            };

            //弹窗上线
            $scope.online = function () {
                console.log(this);
                var listid = this.article;
                console.log(listid);
                $http({
                        method: 'PUT',
                        url: '/carrots-admin-ajax/a/u/article/status',
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        params: {
                            id: listid.id,
                            status: 2
                        }
                    }
                ).then(function (res) {
                    bootbox.confirm({
                        size: "medium",
                        message: '是否执行上线线操作？',
                        buttons: {
                            confirm: {
                                label: "确认",
                                className: "btn-success"
                            },
                            cancel: {
                                label: "取消",
                                className: "btn-danger"
                            }
                        },
                        callback: function () {
                            bootbox.alert('确定');
                            $scope.data = res.data;
                            $state.go('base.Article', {}, {reload: true})
                        }
                    })
                })
            };


            //弹窗下架
            $scope.under = function () {
                //下架
                console.log(this);
                var listid = this.article;
                console.log(listid);
                $http({
                        method: 'PUT',
                        url: '/carrots-admin-ajax/a/u/article/status',
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        params: {
                            id: listid.id,
                            status: 1
                        }
                    }
                ).then(function (res) {
                    bootbox.confirm({
                        size: "medium",
                        message: '下线后该图片将不展示站轮播banner中。\n' +
                        '\n' +
                        '是否执行下线操作？',
                        buttons: {
                            confirm: {
                                label: "确认",
                                className: "btn-success"
                            },
                            cancel: {
                                label: "取消",
                                className: "btn-danger"
                            }
                        },
                        callback: function () {
                            bootbox.alert('确定');
                            $scope.data = res.data;
                            $state.go('base.Article', {}, {reload: true})
                        }
                    });
                })
            };

            //弹窗删除
            $scope.cut = function (id) {
                var id = this.article.id;
                console.log(id);
                $http({
                    method: 'Delete',
                    url: '/carrots-admin-ajax/a/u/article/' + id
                }).then(function (res) {
                    bootbox.confirm({
                        size: "medium",
                        message: '是否执行删除操作？',
                        buttons: {
                            confirm: {
                                label: "确认",
                                className: "btn-success"
                            },
                            cancel: {
                                label: "取消",
                                className: "btn-danger"
                            }
                        },
                        callback: function () {
                            bootbox.alert('确定');
                            $scope.data = res.data;
                            $state.go('base.Article', {}, {reload: true})
                        }
                    });
                })
            };

            ///时间插件
            //datepickerpopup的数据
            $scope.today = new Date();
            $scope.datepickerOptions1 = {
                maxDate: $scope.dt1,
                startingDay: 1
            };
            $scope.datepickerOptions2 = {
                minDate: $scope.dt2,
                // maxDate: $scope.today,
                startingDay: 1
            };
            //打开popup
            $scope.pop1 = {
                opened: false
            };
            $scope.pop2 = {
                opened: false
            };
            $scope.openpop1 = function () {
                $scope.pop1.opened = true;
            };
            $scope.openpop2 = function () {
                $scope.pop2.opened = true;
            };

            //监听dt1 和dt2 如果dt1 变化就设置 datepickeroptions.mindate就变化
            $scope.$watch('dt1', function (newValue, oldValue) {
                $scope.datepickerOptions2.minDate = newValue;
            });
            $scope.$watch('dt2', function (newValue, oldValue) {
                $scope.datepickerOptions1.maxDate = newValue;
            });


            //分页确定按钮

            $scope.sure = function () {
                $state.go("base.Article",{
                    //类型搜索
                    type: $scope.type,
                    //状态搜索
                    status: $scope.status,
                    //日历搜索
                    createAt: $scope.createAt,
                    updateAt: $scope.updateAt,
                    //页面显示条数
                    size: $scope.size,
                    //分页
                    page: $scope.currentPage
                },{reload: true})
            };


            //编辑页面传参
            $scope.edit = function (id) {
                var id = this.article.id;
                console.log(id);
                $state.go("base.edit", {id: id})

            };


        }
    );

// app.factory("change", function ($state, res) {
//     return {
//         get: function (id, status) {
//             bootbox.setLocale("zh_CN");
//             switch (status) {
//                 case 2:
//                     bootbox.confirm({
//                         size: "medium",
//                         title: "操作提示",
//                         message: '下线后该图片将不展示站轮播banner中。\n' +
//                         '\n' +
//                         '是否执行下线操作？',
//                         buttons: {
//                             confirm: {
//                                 label: "确认",
//                                 className: "btn-success"
//                             },
//                             cancel: {
//                                 label: "取消",
//                                 className: "btn-danger"
//                             }
//                         },
//                         callback: function (result) {
//                             if (result) {
//                                 res
//                             }
//                         }
//                     })
//             }
//         }
//     }
// });



