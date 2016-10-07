/**
 * Created by znetcn005 on 2016/8/12.
 */
angular.module('app').register.controller('ContentCtrl', function ($scope, $timeout, $http) {
    $scope.loadingIsDone = false;
    $scope.filteredTodos = []
        , $scope.currentPage = 1
        , $scope.numPerPage = 10
        , $scope.maxSize = 10;
    //        game/lottery/?id=18&option=win
    $scope.getList = function (_currentPage, _numPerPage) {
        DataJs.get('#/game/lottery', {
            'limit': _numPerPage,
            'page': _currentPage,
            'option': 'winGetList',
            'id' : 18
        }, function (_CallbackData) {
            if (typeof(_CallbackData) == 'object') {
                var jsondata = _CallbackData.data;
                if (_CallbackData.code == true) {
                    if (jsondata['One'] > 0) {
                        $scope.isReady = true;
                        $scope.todos = jsondata['One'];
                        var aa = {0:"a", 1:"b",2:"c", length:3};

                        $scope.filtered = [];
                        $scope.filtered = jsondata['All'];
                        $scope.$watch("currentPage + numPerPage", function() {
                            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                                , end = begin + $scope.numPerPage;
                            $scope.filteredTodos = $scope.filtered.slice(begin, end);

                        });
                    } else {
                    }
                } else {
                    window.location = '#/interface/index';
                }
            }
        }, 'json')
    };
    $scope.getList($scope.currentPage - 1,1000);
});
angular.module('app').register.controller('ContentCtrl', ContentCtrl);

ContentCtrl.$inject = ["NgTableParams"];

function demoController(NgTableParams) {
    var self = this;
    var data = [{name: "Moroni", age: 50} /*,*/];
    self.tableParams = new NgTableParams({}, { dataset: data});
}
demoController();


/* 以上为用angular ui bootstrap 实现 分页失败代码。动态从后台获取数据行不通，
* 如果为静态数据则可以。
* 动态行不通原因
* 数据通过ajax异步加载进来。排在异步队列中，ng-repeat可能已经执行完毕才获取到数据。
 * 最后采用 ng-table 解决问题*/


