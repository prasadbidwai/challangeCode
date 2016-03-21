/* @Author: Prasad Bidwai
 * @Project: Coding Challenge
 */

var app = angular.module('myApp', []);
var json = {}; // Inititalize the JSON to {} inititally

app.controller('displayCtrlr', function($scope, $http) {


/* 
 * This function will fire an API AJAX 'GET' request and get the dataset.
 */

    $(document).ready(function() {
        var _this = this;
        $.ajax({
                url: 'http://private-a73e-aquentuxsociety.apiary-mock.com/members', //Ajax call to receive get 
                type: 'GET',
            })
            .done(function(data) {
                var _this = this;
                json = data;
                $('#dynatable').dynatable({
                    dataset: {
                        records: json
                    }
                });
            })
            .fail(function() {
                console.error("Failed to Load the API call");
            });

    });

    $scope.updateMoreInfo = function() {

        $('#dynatable').find('tr').click(function() {
            $scope.newdat = (json[$(this).index()]);
        });

    }
});