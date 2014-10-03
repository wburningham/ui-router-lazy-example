'use strict';

require.config({

    deps: ['main'],

    // Cache busting
    // Enable for production only
    //urlArgs: '_=' + (new Date()).getTime(),

    paths: {
        bootstrap: '/static/lib/bootstrap/dist/js/bootstrap.min',        
        angular: '/static/lib/angular/angular',        
        angularResource: '/static/lib/angular-resource/angular-resource',
        angularSanitize: '/static/lib/angular-sanitize/angular-sanitize.min',
        angularUiRouter: '/static/lib/angular-ui-router/release/angular-ui-router',
        d3: '/static/lib/d3/d3',
        async: '/static/lib/requirejs-plugins/src/async',        
        jquery: '/static/lib/jquery/dist/jquery.min',
        lodash: '/static/lib/lodash/dist/lodash.min',
        ocLazyLoad: '/static/lib/ocLazyLoad/dist/ocLazyLoad.min',
        uiRouterExtras: '/static/lib/ui-router-extras/release/ct-ui-router-extras',
        uiRouterExtrasStatevis: './ui-router-extras-statevis'
    },

    shim: {
        bootstrap: { deps: ['jquery']},        
        angular: { deps: ['jquery'], exports: 'angular' },        
        angularResource: { deps: ['angular'] },
        angularSanitize: { deps: ['angular'] },
        angularUiRouter: {deps: ['angular']},
        d3: {deps: []},
        jquery: { exports: '$' },
        lodash: { exports: '_' },
        ocLazyLoad: {deps: ['angular']},
        uiRouterExtras: {deps: ['angularUiRouter']},
        uiRouterExtrasStatevis: {deps: ['uiRouterExtras']}
    }

});