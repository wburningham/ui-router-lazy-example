'use strict';

require.config({

    deps: ['main'],

    // Cache busting
    // Enable for production only
    //urlArgs: '_=' + (new Date()).getTime(),

    paths: {
        angular: '../lib/angular/angular',        
        angularResource: '../lib/angular-resource/angular-resource',
        angularSanitize: '../lib/angular-sanitize/angular-sanitize.min',
        angularUiRouter: '../lib/angular-ui-router/angular-ui-router',
        angularUiExtras: '../lib/angular-ui-extras/ct-ui-router-extras',        
        async: '../lib/requirejs-plugins/src/async',        
        jquery: '../lib/jquery/jquery.min',        
        ocLazyLoad: '../lib/ocLazyLoad/ocLazyLoad.min'        
    },

    shim: {
        angular: { deps: ['jquery'], exports: 'angular' },        
        angularResource: { deps: ['angular'] },
        angularSanitize: { deps: ['angular'] },
        angularUiRouter: {deps: ['angular']},
        angularUiExtras: {deps: ['angularUiRouter']},        
        jquery: { exports: '$' },        
        ocLazyLoad: {deps: ['angular']}        
    }

});