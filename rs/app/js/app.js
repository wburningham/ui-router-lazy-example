define([

    'angular',    
    'bootstrap',    
    'angularUiRouter',
    'uiRouterExtras',
    'uiRouterExtrasStatevis',
    'ocLazyLoad',
    'core/module',
    'core/services/settings',
    'states/core'
], function (angular) {

    'use strict';

   return angular.module('rs',
        [
            'ui.router',
            'ct.ui.router.extras',
            'ct.ui.router.extras.examples.statevis',
            'oc.lazyLoad',
            'rs.core',
            'rs.states.core'
        ]).config([
           '$ocLazyLoadProvider',
           '$futureStateProvider',
           '$locationProvider',
           'SettingsServiceProvider',           
           function($ocLazyLoadProvider,
                    $futureStateProvider,
                    $locationProvider,
                    SettingsServiceProvider) {

              $locationProvider.html5Mode(true);

               $ocLazyLoadProvider.config ({
                   debug: true,
                   jsLoader: requirejs,
                   loadedModules: ['rs'],
                   modules: [{
                       reconfig: true,
                       name: 'rs.states.distributions',
                       files: ['states/distributions']
                   }, {
                       reconfig: true,
                       name: 'rs.states.apple',
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

               $futureStateProvider.addResolve(function ($injector) {
                   /**
                    * NOTE: resolves can be used for determining
                    * which future states you actually want.
                    * Here, we register both apples and distributionss.
                    * Try uncommenting the if/else to see
                    * the magic of provider injected logic
                    *
                    * Important thing to remember: in addResolve, you have
                    * to "return" the thenable promise chain if you want it
                    * to actually wait on your provider's resolution.
                    */
                   return $injector.invoke(SettingsServiceProvider.fruit).then(
                       function (fruitResult) {
                           // if (fruitResult === 'distributionss') {
                               $futureStateProvider.futureState({
                                   'stateName': 'rs.distributions',
                                   'urlPrefix': '/distributions',
                                   'type': 'ocLazyLoad',
                                   'module': 'rs.states.distributions'
                               });
                           // } else if (fruitResult === 'apples') {
                               $futureStateProvider.futureState({
                                   'stateName': 'rs.apple',
                                   'urlPrefix': '/apple',
                                   'type': 'ocLazyLoad',
                                   'module': 'rs.states.apple'
                               });
                           // }
                       }
                   );
               });
           }]);
});