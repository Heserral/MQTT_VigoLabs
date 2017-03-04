//https://github.com/shellus/angular-MQTT

var app = angular.module('myapp', ['ngMQTT']);
app.config(['MQTTProvider', function (MQTTProvider) {
    MQTTProvider.setHref('ws://cv.endaosi.com:18585');
}]);
app.controller('indexCtrl', ['$scope', 'MQTTService', function ($scope, MQTTService) {
    MQTTService.on('hello', function (data) {
        alert(data)
    });
    MQTTService.send('hello', 'word');
    MQTTService.send('hello', 'word1');
    MQTTService.send('hello', 'word2');
}]);

$(function () { 
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});