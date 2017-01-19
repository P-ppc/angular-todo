window.APP = angular.module("APP", ['ngRoute']);
var app = window.APP;

app.controller('todoCtrl', function ($scope) {
    $scope.todoList = [];
    $scope.addTodo = function (title) {
        if (title == "") return;
        $scope.todoList.push({
            title: title
        });
    };
});

