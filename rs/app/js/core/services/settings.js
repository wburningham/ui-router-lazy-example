define([

    'core/module'

], function (coreModule) {

    'use strict';

    coreModule.provider('SettingsService', function () {

        var applesOrdistributionss = 'apples';

        return {
            $get: function() {
                return this;
            },            

            fruit: ['$q', function ($q) {
                var deferred = $q.defer();
                deferred.resolve(applesOrdistributionss);
                return deferred.promise;
            }]
        };
    });
});
