App.module('Boulevard.Collections', function (Collections, App, Backbone, Marionette, $, _) {

    Collections.Promos = Backbone.Collection.extend({
        model: App.Boulevard.Models.Promo,
        url: 'http://50.28.16.26/~jarularest/?q=api/json/promotion'
    });

});