angular.module("myapp", [ "kendo.directives" ])
.controller("KendoController", function($scope){
    $scope.value = 50;

    $scope.onSelect = function(e) {
        var message = $.map(e.files, function(file) { return file.name; }).join(", ");
        kendoConsole.log("event :: select (" + message + ")");
    };

    
})