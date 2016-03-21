var app = angular.module('myApp', []);
var json = {};


app.controller('displayCtrlr', function($scope, $http) {

  $(document).ready(function() 
  {
    var _this = this;
    $.ajax({
      url: 'http://private-a73e-aquentuxsociety.apiary-mock.com/members',     //Ajax call to receive get 
      type: 'GET',
    })
    .done(function(data) {
      var _this= this;
      json = data;
      $('#dynatable').dynatable({dataset: {records: json}});
    });
  
  });

  $scope.updateMoreInfo = function() 
  {
    
    $('#dynatable').find('tr').click( function(){
      $scope.newdat = (json[$(this).index()]);
    });
  
  }
            
});