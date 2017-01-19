window.APP = angular.module("APP", ['ngRoute']);
var app = window.APP;

app.controller('todoCtrl', function ($scope) {
    $scope.todoList = [];
    $scope.selectedItemId = null;
    var id = 0;
    $scope.addTodo = function (title) {
        if (title == "") return;
        $scope.todoList.push({
            id: id++,
            title: title
        });
    };
    $scope.selectTodoItem = function (item) {
        if ($scope.selectedItemId == item.id) {
            $scope.selectedItemId = null;
        } else {
            $scope.selectedItemId = item.id;
        }
    }
});

