define([

    'angularUiRouter',    
    'core/controllers/home',    

], function() {

    'use strict';

    angular.module('rs.states.core', [
        'ui.router',        
    ]).config([
            '$stateProvider',
            '$urlRouterProvider',
            '$urlMatcherFactoryProvider',
            function($stateProvider,
                     $urlRouterProvider,
                     $urlMatcherFactoryProvider
                ) {

        $stateProvider
            .state('rs', {
                abstract: true,
                templateUrl: '/views/core/rs.html',
            })
            .state('rs.home', {
                url: '/',
                templateUrl: '/views/core/home.html',
                controller: 'HomeCtrl'                
            });         
        }
    ]);
});