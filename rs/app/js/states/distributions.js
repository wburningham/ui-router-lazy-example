define([

    'angularUiRouter',
    'distributions/module',
    'distributions/controllers/base',    

], function() {

    'use strict';

    angular.module('rs.states.distributions', [
        'ui.router',        
        'rs.distributions'
    ]).config([
            '$stateProvider',
            '$urlRouterProvider',
            '$urlMatcherFactoryProvider',
            function($stateProvider,
                     $urlRouterProvider,
                     $urlMatcherFactoryProvider
                ) {

        $stateProvider            
            .state('rs.distributions', {
                url: '/distributions',
                templateUrl: '/static/views/distributions/base.html',
                controller: 'distributions.BaseCtrl'                
            });            
        }
    ]);
});