window.APP.directive('mCheckbox', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            mChecked: '&',            
            mClick: '&'
        },
        templateUrl: "views/templates/mCheckbox.html",
        controller: function ($scope, $element, $attrs, $transclude) {
            $scope.click = function ($event) {
                var checkbox = $event.target,
                    mCheckbox = checkbox.parentNode.parentNode;
                if (checkbox.checked) {
                    mCheckbox.classList.add("is-checked");
                } else {
                    mCheckbox.classList.remove("is-checked");
                }
                // 执行父controller事件
                $scope.mClick();
            };
            function init () {
                // $element是jquery对象
                var $checkbox = $element.find("input[type=checkbox]");
                if ($scope.mChecked()) {
                    $element.addClass("is-checked");
                    $checkbox.prop("checked", true);
                }
            };
            init();
        }
    };
});