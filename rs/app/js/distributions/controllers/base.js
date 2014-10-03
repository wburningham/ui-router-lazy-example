define([

    'distributions/module'    

], function(distributionsModule) {

    'use strict';

    var controller = function($rootScope, $scope, $timeout) {
    	$scope.message = 'I am distributions controller';
        
    };

    distributionsModule.controller('distributions.BaseCtrl', ['$rootScope', '$scope', '$timeout', controller]);
});