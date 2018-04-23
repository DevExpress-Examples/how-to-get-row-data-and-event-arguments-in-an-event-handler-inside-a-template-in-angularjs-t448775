var myApp = angular.module("myApp", ["dx"]);
myApp.controller("demoController", function ($scope) {
    $scope.grid = {
        dataSource: {
            store: {
                key: "orderID",
                type: 'array',
                data: data
            }
        },
        width: 800,
        paging:{
            pageSize: 10
        },
        columns: ["orderID", {
            dataField: "orderDate",
            dataType: "date"
        }, "customerName", "shipCountry", "shipCity", {
                cellTemplate: 'buttonTemplate'
        }],
        filterRow: {
            visible: true
        },
        headerFilter: {
            visible: true
        },
        groupPanel: {
            visible: true
        }
    };
    $scope.buttonClick = function (rowData) {
        return function (event) {
            var text = "Key: " + rowData.key + " Coordinates: X:" + event.jQueryEvent.pageX + ", Y:" + event.jQueryEvent.pageY;
            DevExpress.ui.notify(text);
        }
    }
});