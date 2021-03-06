angular.module('myApp')
    .controller('Article', function ($scope, $timeout,$http) {
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
    });
