//https://github.com/shellus/angular-MQTT
//https://github.com/pablojim/highcharts-ng



var app = angular.module('myapp', ['ngMQTT','highcharts-ng']);
app.config(['MQTTProvider', function (MQTTProvider) {
    MQTTProvider.setHref('ws://localhost:3000');
}]);
app.controller('myctrl', ['$scope', 'MQTTService', function ($scope, MQTTService) {
    
    
    $scope.chartConfig = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Engine Data'
        },
        xAxis: {
            categories: ['RPM', 'Temp', 'Gear']
        },
        yAxis: {
            title: {
                text: 'VigoLabs Engine'
            }
        },
        series: [{
                    data: [0,0,0],
                    id: 'series1'
                }]
    };
    
    
    MQTTService.on('m/t/1', function (data) {
        $scope.chartConfig.series[0].data[0]=data;
    });
    MQTTService.on('m/t/2', function (data) {
        $scope.chartConfig.series[0].data[1]=data;
    });
    MQTTService.on('m/t/3', function (data) {
        $scope.chartConfig.series[0].data[2]=data;
    });

    
    //MQTTService.send('hello/world', 3);
    //MQTTService.send('hello/world', 2);
    //MQTTService.send('hello/world', 4);
    
    
}]);

