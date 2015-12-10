App.module('Boulevard.Models', function (Models, App, Backbone, Marionette, $, _) {
    Models.Promo = Backbone.Model.extend({
        urlRoot: 'http://50.28.16.26/~jarularest/?q=api/json/promotion',
        defaults: {
            'id': null,
            'title': null,
            'description': null,
            'picture': null
        }
    });
});