window.APP = angular.module("APP", ['ngRoute']);

window.APP.controller('todoCtrl', function ($scope) {
    $scope.todoList = [];
    $scope.DONE_STATUS = "DONE";
    $scope.selectedItem = null;
    $scope.title = "";
    var id = 0;
    $scope.addTodo = function (title) {
        if (title == "" || title.trim() == "") return;
        var now = moment().format('LLL');
        $scope.todoList.push({
            id: id++,
            title: title,
            description: "this is the description of the task, please change it.",
            status: "OPEN",
            createTime: now,
            updateTime: now
        });
        $scope.title = "";
    };
    $scope.selectTodoItem = function (item) {
        if ($scope.selectedItem && $scope.selectedItem.id == item.id) {
            $scope.selectedItem = null;
        } else {
            $scope.selectedItem = item;
        }
    };
    $scope.isDone = function (item) {
        return item.status === $scope.DONE_STATUS;
    };
    $scope.updateStatus = function (item) {
        item.status = item.status == "OPEN" ? "DONE" : "OPEN";
    };
    var now = moment().format('LLL');
    $scope.todoList.push({
        id: id++,
        title: 'init task',
        description: "this is the description of the task, please change it.",
        status: "OPEN",
        createTime: now,
        updateTime: now
    });
});

