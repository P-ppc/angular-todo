window.APP = angular.module("APP", ['ngRoute']);
var app = window.APP;

app.controller('todoCtrl', function ($scope) {
    $scope.todoList = [];
    $scope.DONE_STATUS = "DONE";
    $scope.selectedItemId = null;
    var id = 0;
    $scope.addTodo = function (title) {
        // TODO 避免添加重复任务
        if (title == "") return;
        $scope.todoList.push({
            id: id++,
            title: title,
            status: "OPEN"
        });
        $scope.title = "";
    };
    $scope.selectTodoItem = function (item) {
        if ($scope.selectedItemId == item.id) {
            $scope.selectedItemId = null;
        } else {
            $scope.selectedItemId = item.id;
        }
    };
    $scope.isDone = function (item) {
        return item.status === $scope.DONE_STATUS;
    };
    $scope.updateStatus = function (item, $event) {
        item.status = item.status == "OPEN" ? "DONE" : "OPEN";
        $event.stopPropagation();
    };

    function loadTodoList () {
       $scope.todoList = [
            {id: id++, title: "task one!", status: "DONE"},
            {id: id++, title: "task two!", status: "DONE"},
            {id: id++, title: "task three!", status: "DONE"}
       ]; 
    }
    loadTodoList();
});

