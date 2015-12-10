App.module('Boulevard.Collections', function (Collections, App, Backbone, Marionette, $, _) {

    Collections.Locales = Backbone.Collection.extend({
        model: App.Boulevard.Models.Local,
        url: 'http://50.28.16.26/~jarularest/?q=api/json/store'
    });

});