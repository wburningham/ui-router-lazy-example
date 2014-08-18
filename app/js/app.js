define([

    'angular',    
    'angularUiRouter',
    'angularUiExtras',
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
                       reconfig: true,
                       name: 'futureStates.states.orange',
                       files: ['states/orange']
                   }, {
                       reconfig: true,
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
                   if(SettingsServiceProvider.fruit() === 'oranges') {
                     $futureStateProvider.futureState({
                         'stateName': 'app.orange',
                         'urlPrefix': '/lazy',
                         'type': 'ocLazyLoad',
                         'module': 'futureStates.states.orange'
                     });

                   } else if (SettingsServiceProvider.fruit() === 'apples') {
                       $futureStateProvider.futureState({
                           'stateName': 'app.apple',
                           'urlPrefix': '/lazy',
                           'type': 'ocLazyLoad',
                           'module': 'futureStates.states.apple'
                       });

                   }                                        
               });
           }]);
});