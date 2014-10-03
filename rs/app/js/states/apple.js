define([

    'angularUiRouter',
    'apple/module', 
    'apple/controllers/base',    

], function() {

    'use strict';

    angular.module('rs.states.apple', [
        'ui.router',
        'rs.apple'
    ]).config([
            '$stateProvider',
            '$urlRouterProvider',
            '$urlMatcherFactoryProvider',
            function($stateProvider,
                     $urlRouterProvider,
                     $urlMatcherFactoryProvider
                ) {

        $stateProvider            
            .state('app.apple', {
                url: '/apple',
                templateUrl: '/views/apple/base.html',
                controller: 'Apple.BaseCtrl'                
            });        
        }
    ]);
});