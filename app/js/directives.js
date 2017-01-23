// 自定义checkbox
window.APP.directive('mCheckbox', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            mChecked: '&',            
            mClick: '&'
        },
        templateUrl: "views/templates/mCheckbox.html"
    };
});
// 可编辑标签ng-model支持指令
window.APP.directive('contenteditable', function () {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngModel', // get a hold of NgModelController
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) {
                return;
            } // do nothing if no ng-model
            // Specify how UI should be updated
            ngModel.$render = function () {
                element.html(ngModel.$viewValue || "");
            };
            // Listen for change events to enable binding
            element.on('blur key up change', function () {
                scope.$apply(readViewText);
            });
            // No need to initialize, AngularJS will initialize the text based on ng-model attribute
            // Write data to the model
            function readViewText () {
                var html = element.html();
                // When we clear the content editable the bowser leaves a <br> behind
                // If strip-br attribute is provided then we strip this out
                if (attrs.stripBr && html === '<br>') {
                    html = "";
                }
                ngModel.$setViewValue(html);
            }
        }
    };
});
