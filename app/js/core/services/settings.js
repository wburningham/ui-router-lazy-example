define([

    'core/module'

], function (coreModule) {

    'use strict';

    coreModule.provider('SettingsService', function () {

        var applesOrOranges = 'apples';

        return {
            $get: function() {
                return this;
            },            

            fruit: function () {
                return applesOrOranges;
            }
        };
    });
});
