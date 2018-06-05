app.config(['$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$ocLazyLoadProvider',
    function ($stateProvider,
              $urlRouterProvider,
              $locationProvider,
              $ocLazyLoadProvider) {
        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {serie: true});
            };
        };
        $ocLazyLoadProvider.config({
            debug: true
        });
        $locationProvider.hashPrefix("");
        $urlRouterProvider.when("", "base");
        $stateProvider
            .state('base', {
                url: '/base',
                templateUrl: 'base.html',
                controller: function ($state) {
                    $state.go('base.welcome')
                },
                resolve: {
                    loadMyFile: _lazyLoad([
                        "js/listCtrl.js"
                    ])
                }
            })
            .state('base.welcome', {
                url: '/welcome',
                templateUrl: 'welcome.html'
            })
            .state('base.Article', {
                url: '/Article?:page=&:size=&:type=&:status=&:startAt=&:endAt',
                templateUrl: 'Article.html',
                params:{
                    type: null,
                    status: null,
                    createAt: null,
                    updateAt: null,
                    page: null,
                    startAt:null,
                    endAt:null,
                    size:null
                },
                controller: function ($state) {
                    $state.go('base.Article')
                },
                resolve: {
                    loadMyFile: _lazyLoad([
                        "js/article.js",
                        'js/bootbox.min.js',
                        'js/angular-locale_zh-cn.js'
                    ])
                }
            })
            .state('base.add', {
                url: '/add?:page=&:size=&:type=&:status=&:startAt=&:endAt&:id=',
                templateUrl: 'add.html',
                controller: function ($state) {
                    $state.go('base.edit')
                },
                resolve: {
                    loadMyFile: _lazyLoad([
                        'css/wangEditor.css',
                        'js/angular-file-upload.min.js',
                        "js/upload.js",
                        'js/wangEditor.js'
                    ])
                }
            })
            .state('base.edit', {
                url: '/edit?:page=&:size=&:type=&:status=&:startAt=&:endAt&:id=',
                templateUrl: 'add.html',
                controller: function ($state) {
                    $state.go('base.edit')
                },
                resolve: {
                    loadMyFile: _lazyLoad([
                        'css/wangEditor.css',
                        'js/angular-file-upload.min.js',
                        "js/upload.js",
                        'js/wangEditor.js'
                    ])
                }
            })
    }]);