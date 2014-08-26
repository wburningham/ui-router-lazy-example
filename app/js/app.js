define([

    'angular',    
    'angularUiRouter',
    'uiRouterExtras',
    'uiRouterExtrasStatevis',
    'ocLazyLoad',
    'core/module',
    'core/services/settings',
    'states/core'
], function (angular) {

    'use strict';

   return angular.module('futureStates',
        [
            'ui.router',
            'ct.ui.router.extras',
            'ct.ui.router.extras.examples.statevis',
            'oc.lazyLoad',
            'futureStates.core',
            'futureStates.states.core'
        ]).config([
           '$ocLazyLoadProvider',
           '$futureStateProvider',
           'SettingsServiceProvider',           
           function($ocLazyLoadProvider,
                    $futureStateProvider,
                    SettingsServiceProvider) {

               $ocLazyLoadProvider.config ({
                   debug: true,
                   jsLoader: requirejs,
                   loadedModules: ['futureStates'],
                   modules: [{
                       name: 'futureStates.states.orange',
                       files: ['states/orange']
                   }, {
                       name: 'futureStates.states.apple',
                       files: ['states/apple']
                   }]
               });

               var ocLazyLoadStateFactory = function ($q, $ocLazyLoad, futureState) {
                   var deferred = $q.defer();
                   $ocLazyLoad.load(futureState.module).then(function(name) {
                       deferred.resolve();
                   }, function() {
                       deferred.reject();
                   });
                   return deferred.promise;
               };

               $futureStateProvider.stateFactory('ocLazyLoad', ocLazyLoadStateFactory);

               $futureStateProvider.addResolve(function () {
                   /**
                    * NOTE: resolves can be used for determining
                    * which future states you actually want.
                    * Here, we register both apples and oranges
                    */
                   //if(SettingsServiceProvider.fruit() === 'oranges') {
                     $futureStateProvider.futureState({
                         'stateName': 'app.orange',
                         'urlPrefix': '/orange',
                         'type': 'ocLazyLoad',
                         'module': 'futureStates.states.orange'
                     });

                   //} else if (SettingsServiceProvider.fruit() === 'apples') {
                       $futureStateProvider.futureState({
                           'stateName': 'app.apple',
                           'urlPrefix': '/apple',
                           'type': 'ocLazyLoad',
                           'module': 'futureStates.states.apple'
                       });

                   //}
               });
           }]);
});