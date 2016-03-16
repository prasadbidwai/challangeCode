
/*
 * GET home page.
 */
var querystring = require('querystring');
var https = require('https');
var request = require("request");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.indexTable = function(req, res){
	  res.render('index1');
	};

exports.getData = function(req, resp){
	
	var resultsObj;
	
	request.get("http://private-a73e-aquentuxsociety.apiary-mock.com/members", function (err, res, body) {
		    	resultsObj = JSON.parse(body);
		        
		    	//Just an example of how to access properties:
		        console.log(resultsObj.length);
		        resp.send(resultsObj);
		})
};

