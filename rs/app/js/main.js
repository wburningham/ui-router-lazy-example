require([

    'angular',
    'app'    

], function (angular) {

        'use strict';        

        $(document).ready(function () {

            angular.bootstrap(document, ['rs']);

            // The following is required if you want AngularJS Scenario tests to work
            $('html').addClass('ng-app: rs');
        });
    }
);