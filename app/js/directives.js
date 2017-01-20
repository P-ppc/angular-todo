window.APP.directive('mCheckbox', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            mChecked: '&',            
            mClick: '&'
        },
        templateUrl: "views/templates/mCheckbox.html",
    };
});